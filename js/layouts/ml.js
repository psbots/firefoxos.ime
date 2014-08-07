Keyboards.ml = {
  label: 'Malayalam',
  shortLabel: 'ml',
  imEngine: 'india',
  menuLabel: 'മലയാളം',
  secondLayout: true,
  alternateLayoutKey: '?123',
  basicLayoutKey: 'കഖഗ',
  types: ['text', 'url', 'email'],
  width: 10,
  keyClassName: 'malayalam',
  alt: {
    'ൗ':'ഔ',
    'ൈ':'ഐ',
    'ാ':'ആ',
    'ീ':'ഈ',
    'ൂ':'ഊ',

    'ോ':'ഓ',
    'േ':'ഏ',
    '്':'അ',
    'ി':'ഇ',
    'ു':'ഉ',

    'ൊ':'ഒ',
    'െ':'എ',

    'ണ':'ൺ',
    'ര':'ർ',
    'റ':'ർഋ',
    'ശ':'ൾ',
    'ക':'ൿ',
    'ന':'ൻ',
    'ല':'ൽ',
    'സ':'ശ'
  },
  upperCase: {
    'ൈ':'ൌ',
    'െ':'േ',
    'ര':'റ',
    'ത':'ഥ',
    'ു':'ൂ',
    'ി':'ീ',
    'പ':'മ്പ',

    'ാ':'അ',
    'സ':'ക്ഷ',
    'ദ':'ധ',
    'ഗ':'ഘ',
    'ഹ':'ഃ',

    'ാ':'',
    'ബ':'ഭ',
    'ഹ':'ങ',


    'ജ':'ഝ',

    'ൊ':'ോ',
    'േ':'ഠ',
    '്':'',
    'ക':'ഖ',
    'ച':'ഛ',

    'ൊ':'ൃ',
    'ം':'ഃ',
    'മ':'ം',
    'ന':'ണ',
    'ല':'ള'
  },
  keys: [
    [
      { value: 'ൈ' }, { value: 'വ' }, { value: 'െ' }, { value: 'ര' },
      { value: 'ത' }, { value: 'യ' }, { value: 'ു' }, { value: 'ി' },
      { value: 'ൊ' }, { value: 'പ' }
    ], [
      { value: 'ാ' }, { value: 'സ' }, { value: 'ദ' }, { value: 'ഫ' }, { value: 'ഗ' },{ value: 'ഹ' },
      { value: 'ജ' }, { value: 'ക' }, { value: 'ല' }
    ], [
      { value: '⇪',ratio:1, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ഴ' }, { value: '്' }, { value: 'ച' }, { value: 'വ' },
      { value: 'ബ' }, { value: 'ന' }, { value: 'മ' },
       { value: '⌫',ratio:1, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 1, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '?': '¿',
      '!': '¡'
    },
    keys: [
      [
        { value: '1' }, { value: '2' }, { value: '3' } , { value: '4' },
        { value: '5' } , { value: '6' }, { value: '7' } , { value: '8' },
        { value: '9' }, { value: '0' }
      ], [
        { value: '@', hidden: ['email'] }, { value: '#' }, { value: '$' },
        { value: '%' }, { value: '&' } , { value: '*' }, { value: '-' },
        { value: '+' }, { value: '(' }, { value: ')' },
        { value: '_', visible: ['email'] }
      ], [
        { value: 'ALT', ratio: 1.5, keyCode: KeyEvent.DOM_VK_ALT },
        { value: '!' }, { value: '\"' }, { value: "'" }, { value: ':' },
        { value: ';' }, { value: '/' }, { value: '?' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  }
};
