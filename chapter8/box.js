// The locked box
  //
 // This is the "box" object
  
  var box = {
    locked: true,
    unlock: function() {
      this.locked = false;
    },
    lock: function() {
      this.locked = true;
    },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
    // this is the main function - unlock the box, run the function
  // passed in as the argument to the function.
  function withBoxUnlocked( body ){
    box.unlock();
    try {
      return body();
    } catch (e) {
      console.log("Error thrown: ", e);
    } finally {
      box.lock();
    }
  }
  // add something to the box.
  withBoxUnlocked( function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked( function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: ", e);
  }
  console.log(box.locked);
  // this is a test function
  withBoxUnlocked( function(){
    console.log("This is what's in the box: " + box.content);
  });