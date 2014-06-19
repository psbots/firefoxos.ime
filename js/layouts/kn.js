Keyboards.kn = {
  label: 'Kannada',
  shortLabel: 'kn',
  imEngine: 'india',
  menuLabel: 'ಕನ್ನಡ',
  secondLayout: true,
  alternateLayoutKey: '?123',
  basicLayoutKey: 'ಕಗಪ',
  types: ['text', 'url', 'email'],
  width: 10,
  keyClassName: 'kannada',
  alt: {

  },
  upperCase: {
    'ಟ':'ಠ',
    'ಡ':'ಢ',
    'ೆ':'ೇ',
    'ರ':'ೃ',
    'ತ':'ಥ',
    'ಯ':'ೈ',
    'ು':'ೂ',
    'ಿ':'ೀ',
    'ೊ':'ೋ',
    'ಪ':'ಫ',

    'ಾ':'ಆ',
    'ಸ':'ಶ',
    'ದ':'ಧ',
    '್':'ೄ',
    'ಗ':'ಘ',
    'ಹ':'ಃ',
    'ಜ':'ಝ',
    'ಕ':'ಖ',
    'ಲ':'ಳ',

    'ಞ':'ಙ',
    'ಷ':'಼',
    'ಚ':'ಛ',
    'ವ':'ೌ',
    'ಬ':'ಭ',
    'ನ':'ಣ',
    'ಮ':'ಂ'
  },
  keys: [
    [
      { value: 'ಟ' }, { value: 'ಡ' }, { value: 'ೆ' }, { value: 'ರ' },
      { value: 'ತ' }, { value: 'ಯ' }, { value: 'ು' }, { value: 'ಿ' },
      { value: 'ೊ' }, { value: 'ಪ' }
    ], [
      { value: 'ಾ' }, { value: 'ಸ' }, { value: 'ದ' }, { value: '್' }, { value: 'ಗ' },{ value: 'ಹ' },
      { value: 'ಜ' }, { value: 'ಕ' }, { value: 'ಲ' }
    ], [
      { value: '⇪',ratio:1, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ಞ' }, { value: 'ಷ' }, { value: 'ಚ' }, { value: 'ವ' },
      { value: 'ಬ' }, { value: 'ನ' }, { value: 'ಮ' },
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
