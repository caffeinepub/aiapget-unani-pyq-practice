import Array "mo:core/Array";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Migration "migration";

// Apply migration logic during upgrades
(with migration = Migration.run)
actor {
  public type Question = {
    id : Nat;
    questionText : Text;
    answerOptions : [Text];
    correctAnswerIndex : Nat;
    topic : Text;
    year : Nat;
  };

  public type UserProfile = {
    name : Text;
  };

  var storedArray : [Nat] = [];
  let accessControlState = AccessControl.initState();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let questions = Map.empty<Nat, Question>();

  include MixinAuthorization(accessControlState);

  // ── User profile functions ──────────────────────────────────────────────────
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their profile");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // ── Array functions (admin-only) ────────────────────────────────────────────
  public shared ({ caller }) func storeArray(array : [Nat]) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can store arrays");
    };
    storedArray := array;
  };

  public query ({ caller }) func retrieveArray() : async [Nat] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can retrieve arrays");
    };
    storedArray;
  };

  public shared ({ caller }) func clearArray() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can clear arrays");
    };
    storedArray := [];
  };

  // ── Question management (admin-only) ────────────────────────────────────────
  public shared ({ caller }) func addQuestion(newQuestion : Question) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add questions");
    };
    questions.add(newQuestion.id, newQuestion);
  };

  public query ({ caller }) func getAdminQuestions() : async [Question] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access admin questions");
    };
    questions.values().toArray();
  };

  // ── Public question query functions (open to all) ───────────────────────────
  public query func getQuestions() : async [Question] {
    questions.values().toArray();
  };

  public query func getByTopic(topic : Text) : async [Question] {
    questions.values().toArray().filter(func(q : Question) : Bool { q.topic == topic });
  };

  public query func getByYear(year : Nat) : async [Question] {
    questions.values().toArray().filter(func(q : Question) : Bool { q.year == year });
  };

  public shared ({ caller }) func recordAttempt(questionId : Nat, answerIndex : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can record attempts");
    };
    switch (questions.get(questionId)) {
      case (null) { Runtime.trap("Question not found") };
      case (?question) { question.correctAnswerIndex == answerIndex };
    };
  };
};
