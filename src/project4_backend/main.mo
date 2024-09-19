// The entry point of the Motoko program
actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  }
}
