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
    'റ':'ർ',
    'ശ':'ൾ',
    'ക':'ൿ',
    'ന':'ൻ'
  },
  upperCase: {
    'ൗ':'ഡ',
    'ൈ':'ഢ',
    'ാ':'',
    'ീ':'യ',
    'ൂ':'ഞ',
    'ബ':'ഭ',
    'ഹ':'ങ',
    'ഗ':'ഘ',
    'ദ':'ധ',
    'ജ':'ഝ',

    'ോ':'ട',
    'േ':'ഠ',
    '്':'',
    'ി':'ഷ',
    'ു':'ക്ഷ',
    'പ':'ഫ',
    'ര':'റ',
    'ക':'ഖ',
    'ത':'ഥ',
    'ച':'ഛ',

    'ൊ':'ൃ',
    'െ':'ഋ',
    'ം':'ഃ',
    'മ':'ൽ',
    'ന':'ണ',
    'വ':'ഴ',
    'ല':'ള',
    'സ':'ശ'
  },
  keys: [
    [
      { value: 'ൗ' }, { value: 'ൈ' }, { value: 'ാ' }, { value: 'ീ' },
      { value: 'ൂ' }, { value: 'ബ' }, { value: 'ഹ' }, { value: 'ഗ' },
      { value: 'ദ' }, { value: 'ജ' }
    ], [
      { value: 'ോ' }, { value: 'േ' }, { value: '്' }, { value: 'ി' },
      { value: 'ു' }, { value: 'പ' }, { value: 'ര' }, { value: 'ക' },
      { value: 'ത' }, { value: 'ച' }
    ], [
      { value: '⇪',ratio:1, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ൊ' }, { value: 'െ' }, { value: 'ം' }, { value: 'മ' },
      { value: 'ന' }, { value: 'വ' }, { value: 'ല' }, { value: 'സ' },
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
