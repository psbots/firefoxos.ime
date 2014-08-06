Keyboards.as = {
  label: 'Assamese',
  shortLabel: 'as',
  imEngine: 'india',
  menuLabel: 'অসমীয়া',
  secondLayout: true,
  alternateLayoutKey: '?১২৩',
  basicLayoutKey: 'কখগ',
  types: ['text', 'url', 'email'],
  width: 11,
  keyClassName: 'as',
  alt: {
  },
  upperCase: {
    'ৌ':'ঔ',
    'ৈ':'ঐ',
    'া':'আ',
    'ী':'ঈ',
    'ূ':'ঊ',
    'ব':'ভ',
    'হ':'ঃ',
    'গ':'ঘ',
    'জ':'ঝ',
    'দ':'ধ',
    'ড':'ঢ',

    'ো':'ও',
    'ে':'এ',
    '্':'অ',
    'ি':'ই',
    'ু':'উ',
    'প':'ফ',
    'ৰ':'ৰ',
    'ক':'খ',
    'ট':'ঠ',
    'চ':'ছ',
    'ত':'থ',

    'ॉ':'ऑ',
    'ং':'ँ',
    'ম':'ণ',
    'ন':'ন',
    'ৱ':'ৱ',
    'ল':'ল',
    'চ':'ছ',
    'ৃ':'ঋ',
    '़':'ঞ',
    'স':'শ'
  },
  keys: [
    [
      { value: 'ৌ' }, { value: 'ৈ' }, { value: 'া' }, { value: 'ী' },
      { value: 'ূ' }, { value: 'ব' }, { value: 'হ' }, { value: 'গ' },
      { value: 'দ' }, { value: 'জ' }, { value: 'ড' }
    ], [
      { value: 'ো' }, { value: 'ে' }, { value: '্' }, { value: 'ি' },
      { value: 'ু' }, { value: 'প' }, { value: 'ৰ' }, { value: 'ক' },
      { value: 'ত' }, { value: 'চ' }, { value: 'ট' }
    ], [
      { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ঌ' }, { value: 'ং' }, { value: 'ম' }, { value: 'ন' },
      { value: 'ৱ' }, { value: 'ল' }, { value: 'স' }, { value: 'ৃ' },
      { value: '़' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '১': '1',
      '২': '2',
      '৩': '3',
      '৪': '4',
      '৫': '5',
      '৬': '6',
      '৭': '7',
      '৮': '8',
      '৯': '9',
      '০': '0',
      '?': '¿',
      '!': '¡'
    },
    keys: [
      [
        { value: '১' }, { value: '২' }, { value: '৩' } , { value: '৪' },
        { value: '৫' } , { value: '৬' }, { value: '৭' } , { value: '৮' },
        { value: '৯' }, { value: '০' }
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
