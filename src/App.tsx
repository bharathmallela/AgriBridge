import React, { useState } from 'react'
import Marketplace from './pages/Marketplace'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [cartItems, setCartItems] = useState<any[]>([])
  const [userType, setUserType] = useState<'consumer' | 'farmer'>('consumer')
  const [currency, setCurrency] = useState('INR')
  const [language, setLanguage] = useState('English')

  // Currency formatting function
  const formatCurrency = (amount: number) => {
    const currencySymbols = {
      'INR': '₹',
      'USD': '$',
      'EUR': '€',
      'GBP': '£'
    }
    const symbol = currencySymbols[currency as keyof typeof currencySymbols] || '₹'
    return `${symbol}${amount.toFixed(2)}`
  }

  // Language translations
  const t = (key: string) => {
    const translations = {
      'Shopping Cart': {
        'English': 'Shopping Cart',
        'Hindi': 'खरीदारी की टोकरी',
        'Tamil': 'கடை வண்டி',
        'Telugu': 'షాపింగ్ కార్ట్',
        'Malayalam': 'ഷോപ്പിംഗ് കാർട്ട്'
      },
      'Total': {
        'English': 'Total',
        'Hindi': 'कुल',
        'Tamil': 'மொத்தம்',
        'Telugu': 'మొత్తం',
        'Malayalam': 'ആകെ'
      },
      'Checkout': {
        'English': 'Checkout',
        'Hindi': 'चेकआउट',
        'Tamil': 'செக்அவுட்',
        'Telugu': 'చెక్అవుట్',
        'Malayalam': 'ചെക്ക് ഔട്ട്'
      },
      'Remove': {
        'English': 'Remove',
        'Hindi': 'हटाएं',
        'Tamil': 'நீக்கு',
        'Telugu': 'తొలగించు',
        'Malayalam': 'നീക്കം ചെയ്യുക'
      },
      'Your cart is empty': {
        'English': 'Your cart is empty',
        'Hindi': 'आपकी टोकरी खाली है',
        'Tamil': 'உங்கள் கடை வண்டி காலியாக உள்ளது',
        'Telugu': 'మీ కార్ట్ ఖాళీగా ఉంది',
        'Malayalam': 'നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്'
      },
      'Add some items from the marketplace!': {
        'English': 'Add some items from the marketplace!',
        'Hindi': 'मार्केटप्लेस से कुछ आइटम जोड़ें!',
        'Tamil': 'சந்தையிலிருந்து சில பொருட்களைச் சேர்க்கவும்!',
        'Telugu': 'మార్కెట్‌ప్లేస్ నుండి కొన్ని అంశాలను జోడించండి!',
        'Malayalam': 'മാർക്കറ്റ്‌പ്ലേസിൽ നിന്ന് ചില ഇനങ്ങൾ ചേർക്കുക!'
      },
      'Fresh Produce Market': {
        'English': 'Fresh Produce Market',
        'Hindi': 'ताजा उत्पाद बाजार',
        'Tamil': 'புதிய உற்பத்தி சந்தை',
        'Telugu': 'తాజా ఉత్పత్తి మార్కెట్',
        'Malayalam': 'പുതിയ ഉൽപ്പന്ന മാർക്കറ്റ്'
      },
      'Farm Supplies & Equipment': {
        'English': 'Farm Supplies & Equipment',
        'Hindi': 'कृषि आपूर्ति और उपकरण',
        'Tamil': 'விவசாய வழங்கல் மற்றும் உபகரணங்கள்',
        'Telugu': 'వ్యవసాయ సరఫరా మరియు పరికరాలు',
        'Malayalam': 'കൃഷി വിതരണവും ഉപകരണങ്ങളും'
      },
      'Add to Cart': {
        'English': 'Add to Cart',
        'Hindi': 'कार्ट में जोड़ें',
        'Tamil': 'கடை வண்டியில் சேர்க்கவும்',
        'Telugu': 'కార్ట్‌లో జోడించండి',
        'Malayalam': 'കാർട്ടിൽ ചേർക്കുക'
      },
      'Home': {
        'English': 'Home',
        'Hindi': 'होम',
        'Tamil': 'முகப்பு',
        'Telugu': 'హోమ్',
        'Malayalam': 'ഹോം'
      },
      'Marketplace': {
        'English': 'Marketplace',
        'Hindi': 'बाजार',
        'Tamil': 'சந்தை',
        'Telugu': 'మార్కెట్',
        'Malayalam': 'മാർക്കറ്റ്'
      },
      'Cart': {
        'English': 'Cart',
        'Hindi': 'कार्ट',
        'Tamil': 'வண்டி',
        'Telugu': 'కార్ట్',
        'Malayalam': 'കാർട്ട്'
      },
      'Forum': {
        'English': 'Forum',
        'Hindi': 'फोरम',
        'Tamil': 'மன்றம்',
        'Telugu': 'ఫోరమ్',
        'Malayalam': 'ഫോറം'
      },
      'Profile': {
        'English': 'Profile',
        'Hindi': 'प्रोफाइल',
        'Tamil': 'சுயவிவரம்',
        'Telugu': 'ప్రొఫైల్',
        'Malayalam': 'പ്രൊഫൈൽ'
      },
      'Welcome back!': {
        'English': 'Welcome back!',
        'Hindi': 'वापस स्वागत है!',
        'Tamil': 'மீண்டும் வரவேற்கிறோம்!',
        'Telugu': 'మళ్లీ స్వాగతం!',
        'Malayalam': 'വീണ്ടും സ്വാഗതം!'
      },
      'Here\'s what\'s happening in your agricultural marketplace': {
        'English': 'Here\'s what\'s happening in your agricultural marketplace',
        'Hindi': 'यहाँ आपके कृषि बाजार में क्या हो रहा है',
        'Tamil': 'உங்கள் விவசாய சந்தையில் என்ன நடக்கிறது',
        'Telugu': 'మీ వ్యవసాయ మార్కెట్‌లో ఏమి జరుగుతోంది',
        'Malayalam': 'നിങ്ങളുടെ കാർഷിക മാർക്കറ്റിൽ എന്താണ് സംഭവിക്കുന്നത്'
      },
      'Browse Market': {
        'English': 'Browse Market',
        'Hindi': 'बाजार ब्राउज़ करें',
        'Tamil': 'சந்தையை உலாவுங்கள்',
        'Telugu': 'మార్కెట్‌ను బ్రౌజ్ చేయండి',
        'Malayalam': 'മാർക്കറ്റ് ബ്രൗസ് ചെയ്യുക'
      },
      'Join Community': {
        'English': 'Join Community',
        'Hindi': 'समुदाय में शामिल हों',
        'Tamil': 'சமூகத்தில் சேரவும்',
        'Telugu': 'కమ్యూనిటీలో చేరండి',
        'Malayalam': 'കമ്മ്യൂണിറ്റിയിൽ ചേരുക'
      },
      'List Product': {
        'English': 'List Product',
        'Hindi': 'उत्पाद सूचीबद्ध करें',
        'Tamil': 'தயாரிப்பை பட்டியலிடுங்கள்',
        'Telugu': 'ఉత్పత్తిని జాబితా చేయండి',
        'Malayalam': 'ഉൽപ്പന്നം പട്ടികപ്പെടുത്തുക'
      },
      'Community Forum': {
        'English': 'Community Forum',
        'Hindi': 'समुदाय मंच',
        'Tamil': 'சமூக மன்றம்',
        'Telugu': 'కమ్యూనిటీ ఫోరమ్',
        'Malayalam': 'കമ്മ്യൂണിറ്റി ഫോറം'
      },
      'User Type': {
        'English': 'User Type',
        'Hindi': 'उपयोगकर्ता प्रकार',
        'Tamil': 'பயனர் வகை',
        'Telugu': 'వినియోగదారు రకం',
        'Malayalam': 'ഉപയോക്തൃ തരം'
      },
      'Consumer': {
        'English': 'Consumer',
        'Hindi': 'उपभोक्ता',
        'Tamil': 'நுகர்வோர்',
        'Telugu': 'వినియోగదారు',
        'Malayalam': 'ഉപഭോക്താവ്'
      },
      'Farmer': {
        'English': 'Farmer',
        'Hindi': 'किसान',
        'Tamil': 'விவசாயி',
        'Telugu': 'రైతు',
        'Malayalam': 'കർഷകൻ'
      },
      'Grow Your Business': {
        'English': 'Grow Your Business',
        'Hindi': 'अपना व्यवसाय बढ़ाएं',
        'Tamil': 'உங்கள் வணிகத்தை வளர்த்துக் கொள்ளுங்கள்',
        'Telugu': 'మీ వ్యాపారాన్ని పెంచండి',
        'Malayalam': 'നിങ്ങളുടെ ബിസിനസ് വളർത്തുക'
      },
      'Fresh Produce Awaits': {
        'English': 'Fresh Produce Awaits',
        'Hindi': 'ताजा उत्पाद प्रतीक्षा कर रहा है',
        'Tamil': 'புதிய உற்பத்தி காத்திருக்கிறது',
        'Telugu': 'తాజా ఉత్పత్తి వేచి ఉంది',
        'Malayalam': 'പുതിയ ഉൽപ്പന്നം കാത്തിരിക്കുന്നു'
      },
      'Connect with consumers and grow your agricultural business': {
        'English': 'Connect with consumers and grow your agricultural business',
        'Hindi': 'उपभोक्ताओं के साथ जुड़ें और अपना कृषि व्यवसाय बढ़ाएं',
        'Tamil': 'நுகர்வோருடன் இணைந்து உங்கள் விவசாய வணிகத்தை வளர்த்துக் கொள்ளுங்கள்',
        'Telugu': 'వినియోగదారులతో కనెక్ట్ అవ్వండి మరియు మీ వ్యవసాయ వ్యాపారాన్ని పెంచండి',
        'Malayalam': 'ഉപഭോക്താക്കളുമായി ബന്ധപ്പെടുകയും നിങ്ങളുടെ കാർഷിക ബിസിനസ് വളർത്തുകയും ചെയ്യുക'
      },
      'Discover the freshest produce from local farmers in your area': {
        'English': 'Discover the freshest produce from local farmers in your area',
        'Hindi': 'अपने क्षेत्र के स्थानीय किसानों से ताजा उत्पाद खोजें',
        'Tamil': 'உங்கள் பகுதியில் உள்ள உள்ளூர் விவசாயிகளிடமிருந்து புதிய உற்பத்தியைக் கண்டறியுங்கள்',
        'Telugu': 'మీ ప్రాంతంలోని స్థానిక రైతుల నుండి తాజా ఉత్పత్తులను కనుగొనండి',
        'Malayalam': 'നിങ്ങളുടെ പ്രദേശത്തെ പ്രാദേശിക കർഷകരിൽ നിന്ന് പുതിയ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുക'
      },
      'Total Sales': {
        'English': 'Total Sales',
        'Hindi': 'कुल बिक्री',
        'Tamil': 'மொத்த விற்பனை',
        'Telugu': 'మొత్తం అమ్మకాలు',
        'Malayalam': 'മൊത്തം വിൽപ്പന'
      },
      'Active Orders': {
        'English': 'Active Orders',
        'Hindi': 'सक्रिय आदेश',
        'Tamil': 'செயலில் உள்ள ஆர்டர்கள்',
        'Telugu': 'క్రియాశీల ఆర్డర్లు',
        'Malayalam': 'സജീവ ഓർഡറുകൾ'
      },
      'Customer Reviews': {
        'English': 'Customer Reviews',
        'Hindi': 'ग्राहक समीक्षाएं',
        'Tamil': 'வாடிக்கையாளர் மதிப்புரைகள்',
        'Telugu': 'కస్టమర్ సమీక్షలు',
        'Malayalam': 'ഉപഭോക്തൃ അവലോകനങ്ങൾ'
      },
      'Farm Revenue': {
        'English': 'Farm Revenue',
        'Hindi': 'खेत राजस्व',
        'Tamil': 'விவசாய வருவாய்',
        'Telugu': 'వ్యవసాయ ఆదాయం',
        'Malayalam': 'കൃഷി വരുമാനം'
      },
      'Products Listed': {
        'English': 'Products Listed',
        'Hindi': 'सूचीबद्ध उत्पाद',
        'Tamil': 'பட்டியலிடப்பட்ட தயாரிப்புகள்',
        'Telugu': 'జాబితా చేయబడిన ఉత్పత్తులు',
        'Malayalam': 'പട്ടികപ്പെടുത്തിയ ഉൽപ്പന്നങ്ങൾ'
      },
      'Recent Activity': {
        'English': 'Recent Activity',
        'Hindi': 'हाल की गतिविधि',
        'Tamil': 'சமீபத்திய செயல்பாடு',
        'Telugu': 'ఇటీవలి కార్యకలాపం',
        'Malayalam': 'സമീപകാല പ്രവർത്തനം'
      },
      'News & Updates': {
        'English': 'News & Updates',
        'Hindi': 'समाचार और अपडेट',
        'Tamil': 'செய்திகள் மற்றும் புதுப்பிப்புகள்',
        'Telugu': 'వార్తలు మరియు నవీకరణలు',
        'Malayalam': 'വാർത്തകളും അപ്ഡേറ്റുകളും'
      },
      'New order received': {
        'English': 'New order received',
        'Hindi': 'नया आदेश प्राप्त',
        'Tamil': 'புதிய ஆர்டர் பெறப்பட்டது',
        'Telugu': 'కొత్త ఆర్డర్ అందింది',
        'Malayalam': 'പുതിയ ഓർഡർ ലഭിച്ചു'
      },
      'Product review added': {
        'English': 'Product review added',
        'Hindi': 'उत्पाद समीक्षा जोड़ी गई',
        'Tamil': 'தயாரிப்பு மதிப்புரை சேர்க்கப்பட்டது',
        'Telugu': 'ఉత్పత్తి సమీక్ష జోడించబడింది',
        'Malayalam': 'ഉൽപ്പന്ന അവലോകനം ചേർത്തു'
      },
      'Market price updated': {
        'English': 'Market price updated',
        'Hindi': 'बाजार मूल्य अपडेट',
        'Tamil': 'சந்தை விலை புதுப்பிக்கப்பட்டது',
        'Telugu': 'మార్కెట్ ధర నవీకరించబడింది',
        'Malayalam': 'മാർക്കറ്റ് വില അപ്ഡേറ്റ് ചെയ്തു'
      },
      'Organic farming trends': {
        'English': 'Organic farming trends',
        'Hindi': 'जैविक खेती के रुझान',
        'Tamil': 'இயற்கை விவசாய போக்குகள்',
        'Telugu': 'సేంద్రీయ వ్యవసాయ పోకడలు',
        'Malayalam': 'ജൈവ കൃഷി പ്രവണതകൾ'
      },
      'New farming techniques': {
        'English': 'New farming techniques',
        'Hindi': 'नई खेती की तकनीकें',
        'Tamil': 'புதிய விவசாய நுட்பங்கள்',
        'Telugu': 'కొత్త వ్యవసాయ పద్ధతులు',
        'Malayalam': 'പുതിയ കൃഷി സാങ്കേതികവിദ്യകൾ'
      },
      'Market insights': {
        'English': 'Market insights',
        'Hindi': 'बाजार अंतर्दृष्टि',
        'Tamil': 'சந்தை நுண்ணறிவு',
        'Telugu': 'మార్కెట్ అంతర్దృష్టులు',
        'Malayalam': 'മാർക്കറ്റ് ഉൾക്കാഴ്ചകൾ'
      },
      'Total Earnings': {
        'English': 'Total Earnings',
        'Hindi': 'कुल कमाई',
        'Tamil': 'மொத்த வருவாய்',
        'Telugu': 'మొత్తం ఆదాయం',
        'Malayalam': 'മൊത്തം വരുമാനം'
      },
      'Total Spent': {
        'English': 'Total Spent',
        'Hindi': 'कुल खर्च',
        'Tamil': 'மொத்த செலவு',
        'Telugu': 'మొత్తం ఖర్చు',
        'Malayalam': 'മൊത്തം ചെലവ്'
      },
      'Active Listings': {
        'English': 'Active Listings',
        'Hindi': 'सक्रिय सूची',
        'Tamil': 'செயலில் உள்ள பட்டியல்கள்',
        'Telugu': 'క్రియాశీల జాబితాలు',
        'Malayalam': 'സജീവ പട്ടികകൾ'
      },
      'Orders This Month': {
        'English': 'Orders This Month',
        'Hindi': 'इस महीने के आदेश',
        'Tamil': 'இந்த மாத ஆர்டர்கள்',
        'Telugu': 'ఈ నెల ఆర్డర్లు',
        'Malayalam': 'ഈ മാസത്തെ ഓർഡറുകൾ'
      },
      'Rating': {
        'English': 'Rating',
        'Hindi': 'रेटिंग',
        'Tamil': 'மதிப்பீடு',
        'Telugu': 'రేటింగ్',
        'Malayalam': 'റേറ്റിംഗ്'
      },
      'New Messages': {
        'English': 'New Messages',
        'Hindi': 'नए संदेश',
        'Tamil': 'புதிய செய்திகள்',
        'Telugu': 'కొత్త సందేశాలు',
        'Malayalam': 'പുതിയ സന്ദേശങ്ങൾ'
      },
      'Saved Items': {
        'English': 'Saved Items',
        'Hindi': 'सहेजे गए आइटम',
        'Tamil': 'சேமிக்கப்பட்ட பொருட்கள்',
        'Telugu': 'సేవ్ చేసిన అంశాలు',
        'Malayalam': 'സേവ് ചെയ്ത ഇനങ്ങൾ'
      },
      'Quick Actions': {
        'English': 'Quick Actions',
        'Hindi': 'त्वरित क्रियाएं',
        'Tamil': 'விரைவு செயல்கள்',
        'Telugu': 'త్వరిత చర్యలు',
        'Malayalam': 'ദ്രുത പ്രവർത്തനങ്ങൾ'
      },
      'Find fresh produce': {
        'English': 'Find fresh produce',
        'Hindi': 'ताजा उत्पाद खोजें',
        'Tamil': 'புதிய உற்பத்தியைக் கண்டறியுங்கள்',
        'Telugu': 'తాజా ఉత్పత్తులను కనుగొనండి',
        'Malayalam': 'പുതിയ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുക'
      },
      'Join discussions': {
        'English': 'Join discussions',
        'Hindi': 'चर्चाओं में शामिल हों',
        'Tamil': 'விவாதங்களில் சேரவும்',
        'Telugu': 'చర్చలలో చేరండి',
        'Malayalam': 'ചർച്ചകളിൽ ചേരുക'
      },
      'from last month': {
        'English': 'from last month',
        'Hindi': 'पिछले महीने से',
        'Tamil': 'கடந்த மாதத்திலிருந்து',
        'Telugu': 'గత నెల నుండి',
        'Malayalam': 'കഴിഞ്ഞ മാസത്തിൽ നിന്ന്'
      },
      'this week': {
        'English': 'this week',
        'Hindi': 'इस सप्ताह',
        'Tamil': 'இந்த வாரம்',
        'Telugu': 'ఈ వారం',
        'Malayalam': 'ഈ ആഴ്ച'
      },
      'today': {
        'English': 'today',
        'Hindi': 'आज',
        'Tamil': 'இன்று',
        'Telugu': 'ఈరోజు',
        'Malayalam': 'ഇന്ന്'
      },
      'Based on 127 reviews': {
        'English': 'Based on 127 reviews',
        'Hindi': '127 समीक्षाओं के आधार पर',
        'Tamil': '127 மதிப்புரைகளின் அடிப்படையில்',
        'Telugu': '127 సమీక్షల ఆధారంగా',
        'Malayalam': '127 അവലോകനങ്ങളുടെ അടിസ്ഥാനത്തിൽ'
      },
      'Community': {
        'English': 'Community',
        'Hindi': 'समुदाय',
        'Tamil': 'சமூகம்',
        'Telugu': 'కమ్యూనిటీ',
        'Malayalam': 'കമ്മ്യൂണിറ്റി'
      },
      'Order delivered': {
        'English': 'Order delivered',
        'Hindi': 'आदेश वितरित',
        'Tamil': 'ஆர்டர் வழங்கப்பட்டது',
        'Telugu': 'ఆర్డర్ డెలివర్ చేయబడింది',
        'Malayalam': 'ഓർഡർ ഡെലിവർ ചെയ്തു'
      },
      '2 hours ago': {
        'English': '2 hours ago',
        'Hindi': '2 घंटे पहले',
        'Tamil': '2 மணி நேரம் முன்பு',
        'Telugu': '2 గంటల క్రితం',
        'Malayalam': '2 മണിക്കൂർ മുമ്പ്'
      },
      '1 day ago': {
        'English': '1 day ago',
        'Hindi': '1 दिन पहले',
        'Tamil': '1 நாள் முன்பு',
        'Telugu': '1 రోజు క్రితం',
        'Malayalam': '1 ദിവസം മുമ്പ്'
      },
      '3 days ago': {
        'English': '3 days ago',
        'Hindi': '3 दिन पहले',
        'Tamil': '3 நாட்கள் முன்பு',
        'Telugu': '3 రోజులు క్రితం',
        'Malayalam': '3 ദിവസം മുമ്പ്'
      }
    }
    return translations[key as keyof typeof translations]?.[language as keyof typeof translations[keyof typeof translations]] || key
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 pb-20">
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold mb-2">
                    {userType === 'farmer' ? t('Grow Your Business') : t('Fresh Produce Awaits')}
                  </h1>
                  <p className="text-green-100 text-lg mb-6">
                    {userType === 'farmer' 
                      ? t('Connect with consumers and grow your agricultural business')
                      : t('Discover the freshest produce from local farmers in your area')
                    }
                  </p>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setActiveTab('marketplace')}
                      className="px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                    >
                      {userType === 'farmer' ? t('List Product') : t('Browse Market')}
                    </button>
                    <button 
                      onClick={() => setActiveTab('forum')}
                      className="px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-400 transition-colors"
                    >
                      {t('Join Community')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {userType === 'farmer' ? t('Total Earnings') : t('Total Spent')}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {userType === 'farmer' ? formatCurrency(45230) : formatCurrency(1240)}
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
                      <span className="text-primary-600 text-2xl">💰</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                    <span className="text-gray-500 text-sm ml-2">{t('from last month')}</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {userType === 'farmer' ? t('Active Listings') : t('Orders This Month')}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {userType === 'farmer' ? '24' : '8'}
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                      <span className="text-green-600 text-2xl">📦</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">+3</span>
                    <span className="text-gray-500 text-sm ml-2">{t('this week')}</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('Rating')}</p>
                      <p className="text-3xl font-bold text-gray-900">4.8</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl">
                      <span className="text-yellow-600 text-2xl">⭐</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-500 text-sm">{t('Based on 127 reviews')}</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {userType === 'farmer' ? t('New Messages') : t('Saved Items')}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {userType === 'farmer' ? '12' : '15'}
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                      <span className="text-blue-600 text-2xl">
                        {userType === 'farmer' ? '💬' : '❤️'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-2 py-1 rounded-full">+2</span>
                    <span className="text-gray-500 text-sm ml-2">{t('today')}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('Quick Actions')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setActiveTab('marketplace')}
                      className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛒</div>
                      <div className="font-semibold text-gray-800">{t('Browse Market')}</div>
                      <div className="text-sm text-gray-600">{t('Find fresh produce')}</div>
                    </button>
                    <button 
                      onClick={() => setActiveTab('forum')}
                      className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💬</div>
                      <div className="font-semibold text-gray-800">{t('Community')}</div>
                      <div className="text-sm text-gray-600">{t('Join discussions')}</div>
                    </button>
                    {userType === 'farmer' && (
                      <>
                        <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group">
                          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📝</div>
                          <div className="font-semibold text-gray-800">List Product</div>
                          <div className="text-sm text-gray-600">Sell your crops</div>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group">
                          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📊</div>
                          <div className="font-semibold text-gray-800">Analytics</div>
                          <div className="text-sm text-gray-600">View insights</div>
                        </button>
                      </>
                    )}
                    {userType === 'consumer' && (
                      <>
                        <button 
                          onClick={() => setActiveTab('cart')}
                          className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group"
                        >
                          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛒</div>
                          <div className="font-semibold text-gray-800">View Cart</div>
                          <div className="text-sm text-gray-600">{cartItems.length} items</div>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group">
                          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">❤️</div>
                          <div className="font-semibold text-gray-800">Saved Items</div>
                          <div className="text-sm text-gray-600">Your favorites</div>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('Recent Activity')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-lg">✅</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          {userType === 'farmer' ? t('New order received') : t('Order delivered')}
                        </p>
                        <p className="text-xs text-gray-500">{t('2 hours ago')}</p>
                      </div>
                      <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                        New
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-lg">💬</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">New message from buyer</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                      <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                        2
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 text-lg">⭐</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{t('Product review added')}</p>
                        <p className="text-xs text-gray-500">{t('1 day ago')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* News & Updates */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('News & Updates')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                        <span className="text-primary-600 text-2xl">🌱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{t('Organic farming trends')}</h4>
                        <p className="text-sm text-gray-500">{t('2 hours ago')}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Discover the latest trends in organic farming and sustainable agriculture practices that are revolutionizing the industry...
                    </p>
                    <button className="mt-3 text-primary-600 text-sm font-medium hover:text-primary-700">
                      Read more →
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                        <span className="text-green-600 text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{t('Market price updated')}</h4>
                        <p className="text-sm text-gray-500">{t('2 hours ago')}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Weekly market analysis shows rising demand for locally grown vegetables and premium pricing opportunities...
                    </p>
                    <button className="mt-3 text-primary-600 text-sm font-medium hover:text-primary-700">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'marketplace':
        return <Marketplace 
          onAddToCart={(item) => setCartItems([...cartItems, item])} 
          userType={userType} 
          currency={currency}
          language={language}
          formatCurrency={formatCurrency}
          t={t}
        />
      case 'cart':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-primary-600 mb-6">{t('Shopping Cart')}</h1>
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 text-lg">{t('Your cart is empty')}</p>
                  <p className="text-gray-500">{t('Add some items from the marketplace!')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{item.image}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-gray-600">by {item.seller}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-primary-600">{formatCurrency(item.price)}</span>
                        <button
                          onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))}
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          {t('Remove')}
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>{t('Total')}:</span>
                      <span className="text-primary-600">
                        {formatCurrency(cartItems.reduce((sum, item) => sum + item.price, 0))}
                      </span>
                    </div>
                    <button className="w-full mt-4 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      {t('Checkout')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      case 'forum':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-primary-600 mb-6">{t('Community Forum')}</h1>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Best practices for organic farming</h3>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-gray-600 mb-3">Looking for advice on transitioning to organic farming methods. Any experienced farmers here?</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👤 John Farmer</span>
                    <span>💬 5 replies</span>
                    <span>👍 12 likes</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Seasonal crop rotation tips</h3>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  <p className="text-gray-600 mb-3">Sharing my experience with crop rotation to maintain soil health and maximize yields.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👤 Sarah Green</span>
                    <span>💬 8 replies</span>
                    <span>👍 18 likes</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Local farmers market success stories</h3>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <p className="text-gray-600 mb-3">How has selling at local farmers markets helped your business grow?</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👤 Mike Organic</span>
                    <span>💬 12 replies</span>
                    <span>👍 25 likes</span>
                  </div>
                </div>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Start New Discussion
                </button>
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-primary-600 mb-6">Profile</h1>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('User Type')}</h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setUserType('consumer')}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        userType === 'consumer'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t('Consumer')}
                    </button>
                    <button
                      onClick={() => setUserType('farmer')}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        userType === 'farmer'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t('Farmer')}
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Currently viewing as: <span className="font-semibold capitalize">{userType}</span>
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Your location" />
                    </div>
                  </div>
                </div>

                {userType === 'farmer' && (
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Farm Information</h2>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Your farm name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialties</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="e.g., Organic vegetables, fruits" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{userType === 'farmer' ? '24' : '12'}</div>
                      <div className="text-sm text-gray-600">{userType === 'farmer' ? 'Products Listed' : 'Orders Placed'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{userType === 'farmer' ? '4.8' : '4.9'}</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-primary-600 mb-6">AgriBridge Dashboard</h1>
              <p className="text-gray-600">Default page</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="App">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
      <div>
                <h1 className="text-xl font-bold text-gray-900">AgriBridge</h1>
                <p className="text-xs text-gray-500">Agricultural Marketplace</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Currency Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                  <option value="EUR">€ EUR</option>
                  <option value="GBP">£ GBP</option>
                </select>
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Language:</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिन्दी</option>
                  <option value="Tamil">தமிழ்</option>
                  <option value="Telugu">తెలుగు</option>
                  <option value="Malayalam">മലയാളം</option>
                </select>
              </div>

              {/* User Type Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">View as:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setUserType('consumer')}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      userType === 'consumer'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {t('Consumer')}
                  </button>
                  <button
                    onClick={() => setUserType('farmer')}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      userType === 'farmer'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {t('Farmer')}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab('cart')}
                  className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <span className="text-xl">🛒</span>
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <span className="text-xl">🔔</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <span className="text-xl">👤</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center px-4 py-2 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'home' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <span className="text-sm font-medium">{t('Home')}</span>
          </button>
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'marketplace' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <span className="text-sm font-medium">{t('Marketplace')}</span>
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors relative ${
              activeTab === 'cart' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <span className="text-sm font-medium">{t('Cart')}</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('forum')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'forum' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <span className="text-sm font-medium">{t('Forum')}</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'profile' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <span className="text-sm font-medium">{t('Profile')}</span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default App
