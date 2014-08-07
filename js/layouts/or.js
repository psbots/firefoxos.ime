Keyboards.or = {
  label: 'Odia',
  shortLabel: 'or',
  imEngine: 'india',
  menuLabel: 'ଓଡ଼ିଆ',
  secondLayout: true,
  alternateLayoutKey: '?୧୨୩',
  basicLayoutKey: 'କଖଗ',
  types: ['text', 'url', 'email'],
  width: 11,
  keyClassName: 'odia',
  alt: {
    'र': 'ॠऋ',
    'म': 'ॐ',
    'न': 'ङ',
    'ल': 'ऌॡ',
    'य': 'य़',
    'ओ': 'ऒ',
    'ए': 'ऍऎ',
    'ळ': 'ऴ',
    'ृ': 'ॄ'
  },
  upperCase: {
    'ୌ':'ଔ',
    'ୈ':'ଐ',
    'ା':'ଆ',
    'ୀ':'ଈ',
    'ୂ':'ଊ',
    'ବ':'ଭ',
    'ହ':'ଙ',
    'ଗ':'ଘ',
    'ଦ':'ଧ',
    'ଜ':'ଝ',
    'ଡ':'ଢ',

    'ୋ':'ଓ',
    'େ':'ଏ',
    '୍':'ଅ',
    'ି':'ଇ',
    'ୁ':'ଉ',
    'ପ':'ଫ',
    'ର':'ର',
    'କ':'ଖ',
    'ତ':'ଥ',
    'ଚ':'ଛ',
    'ଟ':'ଠ',

    'ୄ':'ୠ',
    'ଂ':'ଁ',
    'ମ':'ଣ',
    'ନ':'ନ',
    'ୱ':'ୱ',
    'ଲ':'ଳ',
    'ସ':'ଶ',
    'ୟ':'ସ',
    '଼':'ଞ'
  },
  keys: [
    [
      { value: 'ୌ' }, { value: 'ୈ' }, { value: 'ା' }, { value: 'ୀ' },
      { value: 'ୂ' }, { value: 'ବ' }, { value: 'ହ' }, { value: 'ଗ' },
      { value: 'ଦ' }, { value: 'ଜ' }, { value: 'ଡ' }
    ], [
      { value: 'ୋ' }, { value: 'େ' }, { value: '୍' }, { value: 'ି' },
      { value: 'ୁ' }, { value: 'ପ' }, { value: 'ର' }, { value: 'କ' },
      { value: 'ତ' }, { value: 'ଚ' }, { value: 'ଟ' }
    ], [
      { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ୄ' }, { value: 'ଂ' }, { value: 'ମ' }, { value: 'ନ' },
      { value: 'ୱ' }, { value: 'ଲ' }, { value: 'ସ' }, { value: 'ୟ' },
      { value: '଼' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '1': '୧',
      '2': '୨',
      '3': '୩',
      '4': '୪',
      '5': '୫',
      '6': '୬',
      '7': '୭',
      '8': '୮',
      '9': '୯',
      '०': '୦',
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
