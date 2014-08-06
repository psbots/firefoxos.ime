Keyboards['hi-bolnagri'] = {
  label: 'Hindi - bolnagri',
  shortLabel: 'Hi',
  imEngine: 'india',
  menuLabel: 'हिन्दी bolnagri',
  secondLayout: true,
  alternateLayoutKey: '?१२३',
  basicLayoutKey: 'कखग',
  types: ['text', 'url', 'email'],
  width: 10,
  keyClassName: 'hindi-b',
  alt: {
    'र': 'ृॠऱ',
    'म': 'ॐ',
    'न': 'ङ',
    'ल': 'ऌॡ',
    'य': 'य़',
    'ओ': 'ऒ',
    'ए': 'ऍऎ',
    'ळ': 'ऴ',
    'ृ': 'ॄ',
    'ौ':'औ',
    'ै':'ऐ',
    'ा':'आअ',
    'ी':'ई',
    'ू':'ऊ',
    'ो':'ओ',
    'े':'ए',
    '्':'अ',
    'ि':'इ',
    'ु':'उ',
    'ं':'ँ',
    'ॉ':'ऑ'
  },
  upperCase: {
    'ौ':'औ',
    'ै':'ऐ',
    'ा':'आ',
    'ी':'ई',
    'ू':'ऊ',
    'ब':'भ',
    'ह':'ः',
    'ग':'घ',
    'द':'ध',
    'ज':'झ',
    'ड':'ढ',

    'ो':'ौ',
    'े':'ै',
    '्':'ॉ',
    'ि':'ी',
    'ु':'ू',
    'प':'फ',
    'र':'ऋ',
    'क':'ख',
    'त':'थ',
    'च':'छ',
    'ट':'ठ',

    'म':'ड़',
    'न':'ण',
    'व':'ँ',
    'ल':'ळ',
    'स':'ष',
    'य':'ञ',
    'श':'ॅ',
    '़':'ं'
  },
  keys: [
    [
      { value: 'ौ' }, { value: 'व' }, { value: 'े' }, { value: 'र' },
      { value: 'त' }, { value: 'य' }, { value: 'ु' }, { value: 'ि' },
      { value: 'ो' }, { value: 'प' }
    ], [
      { value: 'ा' }, { value: 'स' }, { value: 'द' }, { value: 'ट' },
      { value: 'ग' }, { value: 'ह' }, { value: 'ज' }, { value: 'क' },
      { value: 'ल' }
    ], [
      { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'श' }, { value: '्' }, { value: 'च' }, { value: 'ड' },
      { value: 'ब' }, { value: 'न' }, { value: 'म' },
      { value: '़' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
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
