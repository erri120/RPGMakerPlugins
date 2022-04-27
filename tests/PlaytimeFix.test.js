const gameSystem = function() {
  this.originalInitializeCalled = false;
  this.originalonAfterLoadCalled = false;
  this.originalonBeforeSaveCalled = false;
};

gameSystem.prototype.initialize = function() {
  this.originalInitializeCalled = true;
};

gameSystem.prototype.onAfterLoad = function() {
  this.originalonAfterLoadCalled = true;
};

gameSystem.prototype.onBeforeSave = function() {
  this.originalonBeforeSaveCalled = true;
};

global.Game_System = gameSystem;
require('../src/PlaytimeFix');

describe('PlaytimeFix', () => {
  it('calls original initialize()', () => {
    gameSystem.prototype.initialize();
    expect(gameSystem.prototype.originalInitializeCalled).toBeTruthy();
  });

  it('calls original onAfterLoad()', () => {
    gameSystem.prototype.onAfterLoad();
    expect(gameSystem.prototype.originalonAfterLoadCalled).toBeTruthy();
  });

  it('calls original onBeforeSave()', () => {
    gameSystem.prototype.onBeforeSave();
    expect(gameSystem.prototype.originalonBeforeSaveCalled).toBeTruthy();
  });

  it('new playtimeText() returns correct values', () => {
    const values = [
      [0, '00:00:00'],
      [1000, '00:00:01'],
      [60000, '00:01:00'],
      [600000, '00:10:00'],
      [3600000, '01:00:00'],
      [36000000, '10:00:00'],
      [86400000 - 1, '23:59:59'],
      [86400000, '23:59:59'],
    ];

    for (const pair of values) {
      const playtime = pair[0];
      const expectedText = pair[1];

      gameSystem.prototype._playtime = playtime;
      const actualText = gameSystem.prototype.playtimeText();

      expect(actualText).toBe(expectedText);
    }
  });
});
