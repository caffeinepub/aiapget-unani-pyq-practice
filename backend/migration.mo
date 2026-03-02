import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";

module {
  type Question = {
    id : Nat;
    questionText : Text;
    answerOptions : [Text];
    correctAnswerIndex : Nat;
    topic : Text;
    year : Nat;
  };

  type UserProfile = {
    name : Text;
  };

  type OldActor = {
    questions : [Question];
    storedArray : [Nat];
    userProfiles : Map.Map<Principal, UserProfile>;
  };

  type NewActor = {
    questions : Map.Map<Nat, Question>;
    storedArray : [Nat];
    userProfiles : Map.Map<Principal, UserProfile>;
  };

  public func run(old : OldActor) : NewActor {
    let newQuestions = Map.empty<Nat, Question>();
    for (question in old.questions.values()) {
      newQuestions.add(question.id, question);
    };
    {
      old with
      questions = newQuestions
    };
  };
};
