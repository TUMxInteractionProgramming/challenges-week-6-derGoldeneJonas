var dummyLocation = {
    latitude: 48.249586,
    longitude: 11.634431,
    what3words: "shelf.jetted.purple"
};

var dummyMessage = {
    createdBy: dummyLocation.what3words,
    latitude: dummyLocation.latitude,
    longitude: dummyLocation.longitude,
    createdOn: new Date(), //now
    expiresOn: new Date(Date.now() + 15 * 60 * 1000),
    // mins * secs * msecs
// set text
    text: "test, I am a dummy",
// own message
    own: true
};

var yummy = {
    name: "#Yummy",
    createdOn: new Date(2016, 03, 01), /* month 0 is jan. */
    createdBy: "minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999,
    messages : [dummyMessage]           // #10 #message s property in #chl object
};

var sevencontinents = {
    name: "#SevenContinents",
    createdOn: new Date(2016, 03, 02), /* month 0 is jan. */
    createdBy: "cheeses.yard.applies",
    starred: true,
    expiresIn: 60,
    messageCount: 5,
    messages : [dummyMessage]           // #10 #message s property in #chl object

};

var killerapp = {
    name: "#KillerApp",
    createdOn: new Date(2016, 08, 30), /* month 0 is jan. */
    createdBy: "lodge.bits.fake",
    starred: false,
    expiresIn: 1,
    messageCount: 10351,
    messages : [dummyMessage]           // #10 #message s property in #chl object

};

var firstpersononmars = {
    name: "#FirstPersonOnMars",
    createdOn: new Date(2016, 08, 28), /* month 0 is jan. */
    createdBy: "snipped.atom.grid",
    starred: true,
    expiresIn: 30003,
    messageCount: 2424,
    messages : [dummyMessage]           // #10 #message s property in #chl object

};

var octoberfest = {
    name: "#Octoberfest",
    createdOn: new Date(2016, 08, 25), /* month 0 is jan. */
    createdBy: "vocally.clearly.crawled",
    starred: false,
    expiresIn: 60,
    messageCount: 321,
    messages : [dummyMessage]           // #10 #message s property in #chl object

};
