//
// Jenkins specific rules.
// Over time, we may want to break this up into sub-modules.
//

// TODO: Decide on whether or not we want to override eslint settings.
// Overriding the inherited 2 space indent, changing it to 4 spaces.
// Most of the code in blueocean is using 4 spaces, so changing it to
// match so reduce the diff noise while introducing this. Personally, I (TF)
// prefer 4 spaces to 2 spaces, but maybe we should just use 2 spaces?
// My fear is that if we start overriding settings, then we'll end up watering
// it all down to nothing. No one person is going to like all the rules, but
// I think in general they are good and people can just learn to live with
// them Vs crying about it :)

module.exports = {
    rules: {
        "indent": [2, 4]
    }
};