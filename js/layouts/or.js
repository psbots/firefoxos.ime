Keyboards.or = {
  label: 'Odia',
  shortLabel: 'or',
  imEngine: 'india',
  menuLabel: 'ଓଡ଼ିଆ',
  secondLayout: true,
  alternateLayoutKey: '?१२३',
  basicLayoutKey: 'कखग',
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

    '\u0B4B':'ଓ',
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
      { value: '\u0B4B' }, { value: 'େ' }, { value: '୍' }, { value: 'ି' },
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
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0',
      '?': '¿',
      '!': '¡'
    },
    keys: [
      [
        { value: '१' }, { value: '२' }, { value: '३' } , { value: '४' },
        { value: '५' } , { value: '६' }, { value: '७' } , { value: '८' },
        { value: '९' }, { value: '०' }
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
