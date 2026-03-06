import Map "mo:core/Map";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";

module {
  type OldActor = {
    adminQuestions : [Question];
    accessControlState : AccessControl.AccessControlState;
    userProfiles : Map.Map<Principal, UserProfile>;
    subscriptionSettings : SubscriptionSettings;
  };

  type NewActor = {
    adminQuestions : [Question];
    accessControlState : AccessControl.AccessControlState;
    userProfiles : Map.Map<Principal, UserProfile>;
    subscriptionSettings : SubscriptionSettings;
    paymentRecords : [PaymentRecord];
  };

  type Question = {
    id : Nat;
    questionText : Text;
    answerOptions : [Text];
    correctAnswerIndex : Nat;
    topic : Text;
    year : Text;
    explanation : ?Text;
  };

  type UserProfile = {
    name : Text;
    age : Nat;
    gender : Text;
  };

  type SubscriptionSettings = {
    monthlyPrice : Nat;
    yearlyPrice : Nat;
    freeTrialDays : Nat;
  };

  type PaymentStatus = {
    #pending;
    #approved;
    #rejected;
  };

  type PaymentRecord = {
    id : Text;
    date : Text;
    plan : Text;
    amount : Text;
    utrId : Text;
    paymentMethod : Text;
    userId : Text;
    userName : Text;
    deviceId : ?Text;
    status : PaymentStatus;
    approvedAt : ?Text;
    rejectedAt : ?Text;
  };

  public func run(old : OldActor) : NewActor {
    let emptyPayments : [PaymentRecord] = [];
    {
      old with
      paymentRecords = emptyPayments
    };
  };
};
