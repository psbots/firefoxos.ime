Keyboards.pa = {
  label: 'Punjabi',
  shortLabel: 'pa',
  imEngine: 'india',
  menuLabel: 'ਪੰਜਾਬੀ',
  secondLayout: true,
  alternateLayoutKey: '?१२३',
  basicLayoutKey: 'कखग',
  types: ['text', 'url', 'email'],
  width: 11,
  keyClassName: 'punjabi',
  alt: {
    'ਹ':'ਃ',
  },
  upperCase: {
    'ੌ':'ਔ',
    'ੈ':'ਐ',
    'ਾ':'ਆ',
    'ੀ':'ਈ',
    'ੂ':'ਊ',
    'ਬ':'ਭ',
    'ਹ':'ਙ',
    'ਗ':'ਘ',
    'ਦ':'ਧ',
    'ਜ':'ਝ',
    'ਡ':'ਢ',

    'ੋ':'ਓ',
    'ੇ':'ਏ',
    '्':'अ',
    'ਿ':'ਇ',
    'ੁ':'ਉ',
    'ਪ':'ਫ',
    'ਰ':'ਰ',
    'ਕ':'ਖ',
    'ਤ':'ਥ',
    'ਚ':'ਛ',
    'ਟ':'ਠ',

    'ਂ':'ਁ',
    'ਮ':'ਣ',
    'ਨ':'ਨ',
    'ਵ':'ਵ',
    'ਲ':'ਲ਼',
    'ਸ':'ਸ਼',
    'ਯ':'ਯ',
    '਼':'ਞ'
  },
  keys: [
    [
      { value: 'ੌ' }, { value: 'ੈ' }, { value: 'ਾ' }, { value: 'ੀ' },
      { value: 'ੂ' }, { value: 'ਬ' }, { value: 'ਹ' }, { value: 'ਗ' },
      { value: 'ਦ' }, { value: 'ਜ' }, { value: 'ਡ' }
    ], [
      { value: 'ੋ' }, { value: 'ੇ' }, { value: '्' }, { value: 'ਿ' },
      { value: 'ੁ' }, { value: 'ਪ' }, { value: 'ਰ' }, { value: 'ਕ' },
      { value: 'ਤ' }, { value: 'ਚ' }, { value: 'ਟ' }
    ], [
      { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value : 'ੰ'}, { value: 'ਂ' }, { value: 'ਮ' }, { value: 'ਨ' },
      { value: 'ਵ' }, { value: 'ਲ' }, { value: 'ਸ' }, { value: 'ਯ' },
      { value: '਼' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '੧': '1',
      '੨': '2',
      '੩': '3',
      '੪': '4',
      '੫': '5',
      '੬': '6',
      '੭': '7',
      '੮': '8',
      '੯': '9',
      '੦': '0',
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
