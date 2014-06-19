Keyboards.te = {
  label: 'Telugu',
  shortLabel: 'te',
  imEngine: 'india',
  menuLabel: 'తెలుగు',
  secondLayout: true,
  alternateLayoutKey: '?123',
  basicLayoutKey: 'కగప',
  types: ['text', 'url', 'email'],
  width: 10,
  keyClassName: 'telugu',
  alt: {

  },
  upperCase: {
    'ట':'ఠ',
    'డ':'ఢ',
    'ె':'ే',
    'ర':'ృ',
    'త':'థ',
    'య':'ై',
    'ు':'ూ',
    'ి':'ీ',
    'ొ':'ో',
    'ప':'ఫ',

    'ా':'ఆ',
    'స':'శ',
    'ద':'ధ',
    '్':'ౄ',
    'గ':'ఘ',
    'హ':'ః',
    'జ':'ఝ',
    'క':'ఖ',
    'ల':'ళ',

    'ఞ':'ఙ',
    'చ':'ఛ',
    'వ':'ౌ',
    'బ':'భ',
    'న':'ణ',
    'మ':'ం'
  },
  keys: [
    [
      { value: 'ట' }, { value: 'డ' }, { value: 'ె' }, { value: 'ర' },
      { value: 'త' }, { value: 'య' }, { value: 'ు' }, { value: 'ి' },
      { value: 'ొ' }, { value: 'ప' }
    ], [
      { value: 'ా' }, { value: 'స' }, { value: 'ద' }, { value: '్' }, { value: 'గ' },{ value: 'హ' },
      { value: 'జ' }, { value: 'క' }, { value: 'ల' }
    ], [
      { value: '⇪',ratio:1, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ఞ' }, { value: 'ష' }, { value: 'చ' }, { value: 'వ' },
      { value: 'బ' }, { value: 'న' }, { value: 'మ' },
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
