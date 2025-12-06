

import { MinistryContact, Translation, AssetDeclaration, Wilaya } from './types';

export const WILAYAS: Wilaya[] = [
  'Adrar', 'Assaba', 'Brakna', 'Dakhlet Nouadhibou', 'Gorgol', 
  'Guidimaka', 'Hodh Ech Chargui', 'Hodh El Gharbi', 'Inchiri', 
  'Nouakchott Nord', 'Nouakchott Ouest', 'Nouakchott Sud', 
  'Tagant', 'Tiris Zemmour', 'Trarza'
];

export const ASSET_CATEGORIES = [
    { id: 'RealEstate', label: { fr: 'Immobilier', ar: 'عقار' } },
    { id: 'Vehicle', label: { fr: 'Véhicule', ar: 'مركبة' } },
    { id: 'IT', label: { fr: 'Informatique', ar: 'معلوماتية' } },
    { id: 'Furniture', label: { fr: 'Mobilier', ar: 'أثاث' } },
    { id: 'Equipment', label: { fr: 'Matériel', ar: 'معدات' } }
];

// Mapping of Ministry ID to its Sub-Entities (Directions, Etablissements)
export const MINISTRY_STRUCTURES: Record<string, {fr: string, ar: string}[]> = {
    '1': [ // Finances
        { fr: "Cabinet du Ministre", ar: "ديوان الوزير" },
        { fr: "Direction Générale du Budget", ar: "المديرية العامة للميزانية" },
        { fr: "Direction Générale du Trésor", ar: "المديرية العامة للخزينة" },
        { fr: "Direction Générale des Impôts", ar: "المديرية العامة للضرائب" },
        { fr: "Direction Générale des Douanes", ar: "المديرية العامة للجمارك" },
        { fr: "Direction des Domaines et du Patrimoine", ar: "مديرية العقارات وأملاك الدولة" }
    ],
    '2': [ // Santé
        { fr: "Cabinet du Ministre", ar: "ديوان الوزير" },
        { fr: "Centre Hospitalier National (CHN)", ar: "مركز الاستطباب الوطني" },
        { fr: "Hôpital Cheikh Zayed", ar: "مستشفى الشيخ زايد" },
        { fr: "Hôpital de l'Amitié", ar: "مستشفى الصداقة" },
        { fr: "Institut National de Recherche en Santé Publique (INRSP)", ar: "المعهد الوطني للبحوث في مجال الصحة العمومية" },
        { fr: "Direction de la Pharmacie et des Laboratoires", ar: "مديرية الصيدلة والمختبرات" }
    ],
    '3': [ // Equipement
        { fr: "Cabinet du Ministre", ar: "ديوان الوزير" },
        { fr: "Laboratoire National des Travaux Publics (LNTP)", ar: "المختبر الوطني للأشغال العامة" },
        { fr: "Etablissement des Travaux d'Entretien Routier (ETER)", ar: "مؤسسة أشغال صيانة الطرق" },
        { fr: "Direction des Infrastructures de Transport", ar: "مديرية البنى التحتية للنقل" }
    ]
};

export const TEXTS: Translation = {
  appTitle: { fr: "Patrimoine de l'État (MR)", ar: "ممتلكات الدولة (موريتانيا)" },
  dashboard: { fr: "Tableau de bord", ar: "لوحة القيادة" },
  directory: { fr: "Annuaire & Rappels", ar: "الدليل والتذكير" },
  declaration: { fr: "Gestion des Biens", ar: "إدارة الممتلكات" },
  map: { fr: "Cartographie GPS", ar: "الخريطة الجغرافية" },
  assistant: { fr: "Assistant IA", ar: "المساعد الذكي" },
  users: { fr: "Gestion Utilisateurs", ar: "إدارة المستخدمين" },
  settings: { fr: "Paramètres", ar: "الإعدادات" },
  
  // Auth
  loginTitle: { fr: "Connexion Sécurisée", ar: "تسجيل الدخول الآمن" },
  username: { fr: "Nom d'utilisateur", ar: "اسم المستخدم" },
  password: { fr: "Mot de passe", ar: "كلمة المرور" },
  loginButton: { fr: "Se Connecter", ar: "دخول" },
  logout: { fr: "Déconnexion", ar: "خروج" },
  errorLogin: { fr: "Identifiants invalides", ar: "بيانات الاعتماد غير صالحة" },
  
  // User Management
  addUser: { fr: "Ajouter un utilisateur", ar: "إضافة مستخدم" },
  role: { fr: "Rôle", ar: "الدور" },
  fullName: { fr: "Nom Complet", ar: "الاسم الكامل" },
  ministry: { fr: "Ministère", ar: "الوزارة" },
  roleSuperAdmin: { fr: "Super Administrateur", ar: "مدير فائق" },
  roleMinistryAdmin: { fr: "Admin Ministère", ar: "مدير وزارة" },
  roleEditor: { fr: "Éditeur", ar: "محرر" },
  roleViewer: { fr: "Lecteur", ar: "قارئ" },

  // Dashboard & General
  totalAssets: { fr: "Patrimoine Recensé", ar: "الممتلكات المسجلة" },
  recentActivity: { fr: "Liste des Biens", ar: "قائمة الممتلكات" },
  searchPlaceholder: { fr: "Rechercher...", ar: "بحث..." },
  assetType: { fr: "Type", ar: "النوع" },
  assetCondition: { fr: "État", ar: "الحالة" },
  assetReference: { fr: "Réf.", ar: "المرجع" },
  value: { fr: "Valeur", ar: "القيمة" },
  location: { fr: "Localisation", ar: "الموقع" },
  actions: { fr: "Actions", ar: "إجراءات" },
  exportSheets: { fr: "Exporter Excel/CSV", ar: "تصدير إكسل/CSV" },
  importSheets: { fr: "Importer Excel/CSV", ar: "استيراد إكسل/CSV" },

  // Declaration Steps
  step1: { fr: "Entité & Caractéristiques", ar: "الجهة والخصائص" },
  step2: { fr: "Valorisation & GPS", ar: "التقييم والموقع" },
  step3: { fr: "Photos & Preuves", ar: "الصور والإثباتات" },
  
  // Fields
  reference: { fr: "Réf. Inventaire", ar: "مرجع الجرد" },
  subEntity: { fr: "Direction / Établissement", ar: "المديرية / المؤسسة" },
  selectSubEntity: { fr: "-- Sélectionner une structure --", ar: "-- اختر الهيكل الإداري --" },
  otherEntity: { fr: "Autre (Saisir manuellement)", ar: "آخر (إدخال يدوي)" },
  acquisitionDate: { fr: "Date d'Acquisition", ar: "تاريخ الاقتناء" },
  initialValue: { fr: "Valeur d'Acquisition (MRU)", ar: "قيمة الاقتناء (أوقية)" },
  currentValue: { fr: "Valeur Actuelle Estimée", ar: "القيمة الحالية المقدرة" },
  depreciation: { fr: "Amortissement", ar: "الإهلاك" },
  wilaya: { fr: "Wilaya", ar: "الولاية" },
  details: { fr: "Adresse / Bureau", ar: "العنوان / المكتب" },
  gps: { fr: "Coordonnées GPS (Lat, Lng)", ar: "إحداثيات GPS" },
  
  // Specific Fields
  brand: { fr: "Marque", ar: "العلامة التجارية" },
  model: { fr: "Modèle", ar: "الموديل" },
  plateNumber: { fr: "Immatriculation", ar: "رقم اللوحة" },
  chassisNumber: { fr: "N° Châssis", ar: "رقم الهيكل" },
  surfaceArea: { fr: "Surface (m²)", ar: "المساحة (م²)" },
  landTitle: { fr: "Titre Foncier", ar: "السند العقاري" },
  usage: { fr: "Usage (Bur/Log)", ar: "الاستخدام (مكتب/سكن)" },
  serialNumber: { fr: "N° Série", ar: "الرقم التسلسلي" },
  specs: { fr: "Spécifications (CPU/RAM)", ar: "المواصفات" },
  material: { fr: "Matière (Bois/Métal)", ar: "المادة (خشب/معدن)" },
  dimensions: { fr: "Dimensions", ar: "الأبعاد" },
  color: { fr: "Couleur", ar: "اللون" },
  manufacturer: { fr: "Fabricant", ar: "المصنع" },
  warranty: { fr: "Fin Garantie", ar: "تاريخ انتهاء الضمان" },

  // Documents
  dropzone: { fr: "Glissez vos fichiers ici ou cliquez", ar: "اسحب الملفات هنا أو انقر" },
  requiredDocs: { fr: "Pièces Justificatives Recommandées", ar: "الوثائق الثبوتية الموصى بها" },
  docNamePlaceholder: { fr: "Nom du document (ex: Carte Grise)", ar: "اسم الوثيقة (مثال: البطاقة الرمادية)" },
  preview: { fr: "Aperçu", ar: "معاينة" },
  docTypePhoto: { fr: "Photo", ar: "صورة" },
  docTypeInvoice: { fr: "Facture", ar: "فاتورة" },
  docTypeLegal: { fr: "Document Légal", ar: "وثيقة قانونية" },
  docTypeOther: { fr: "Autre", ar: "آخر" },

  // Actions
  next: { fr: "Suivant", ar: "التالي" },
  prev: { fr: "Précédent", ar: "سابق" },
  submit: { fr: "Enregistrer", ar: "حفظ" },
  update: { fr: "Mettre à jour", ar: "تحديث" },
  upload: { fr: "Ajouter un fichier", ar: "إضافة ملف" },
  delete: { fr: "Supprimer", ar: "حذف" },
  edit: { fr: "Modifier", ar: "تعديل" },
  cancel: { fr: "Annuler", ar: "إلغاء" },
  
  // Directory Status
  statusCompliant: { fr: "À jour", ar: "محدث" },
  statusPending: { fr: "En cours", ar: "قيد المعالجة" },
  statusOverdue: { fr: "En retard", ar: "متأخر" },
  nudge: { fr: "Envoyer Rappel", ar: "إرسال تذكير" },
  sendWhatsapp: { fr: "WhatsApp", ar: "واتساب" },
  sendEmail: { fr: "Email", ar: "بريد" },
  quickMsg: { fr: "Envoi Rapide WhatsApp", ar: "إرسال سريع عبر واتساب" },
  phoneInput: { fr: "Numéro de téléphone", ar: "رقم الهاتف" },
  msgInput: { fr: "Message", ar: "الرسالة" },
  send: { fr: "Envoyer", ar: "إرسال" },

  // Asset Status (Used in Dashboard)
  statusNew: { fr: "Neuf", ar: "جديد" },
  statusGood: { fr: "Bon État", ar: "حالة جيدة" },
  statusNeedsRepair: { fr: "Nécessite Réparation", ar: "يحتاج إصلاح" },
  statusDamaged: { fr: "Hors Service", ar: "خارج الخدمة" },
  statusObsolete: { fr: "Obsolète", ar: "متقادم" },
  
  // AI
  aiPromptPlaceholder: { fr: "Ex: Rédige une note circulaire...", ar: "مثال: اكتب مذكرة تعميمية..." },
  aiButton: { fr: "Générer (FR + AR)", ar: "إنشاء (فرنسي + عربي)" },
};

export const INITIAL_CONTACTS: MinistryContact[] = [
  {
    id: '1',
    name: { fr: "Ministère des Finances", ar: "وزارة المالية" },
    department: { fr: "Direction du Patrimoine", ar: "مديرية العقارات" },
    representative: "M. Ahmed O.",
    role: { fr: "Directeur", ar: "مدير" },
    phone: "22245001234", 
    email: "patrimoine@finances.gov.mr",
    complianceStatus: 'compliant',
    lastSubmission: '2024-03-01'
  },
  {
    id: '2',
    name: { fr: "Ministère de la Santé", ar: "وزارة الصحة" },
    department: { fr: "Logistique & Matériel", ar: "اللوجستيك والمعدات" },
    representative: "Dr. Fatimetou Z.",
    role: { fr: "Point Focal", ar: "نقطة اتصال" },
    phone: "22245009876",
    email: "logistique@sante.gov.mr",
    complianceStatus: 'pending',
    lastSubmission: '2023-11-15'
  },
  {
    id: '3',
    name: { fr: "Ministère de l'Équipement", ar: "وزارة التجهيز والنقل" },
    department: { fr: "Parc Mobile de l'État", ar: "حظيرة الدولة" },
    representative: "Ing. Brahim S.",
    role: { fr: "Chef de Parc", ar: "رئيس الحظيرة" },
    phone: "22245001122",
    email: "materiel@equipement.gov.mr",
    complianceStatus: 'overdue',
    lastSubmission: '2023-01-10'
  }
];

export const INITIAL_ASSETS: AssetDeclaration[] = [
  { 
    id: 'a1', 
    reference: 'V-2023-001', 
    ministryId: '2', 
    subEntity: 'Centre Hospitalier National (CHN)',
    type: 'Vehicle', 
    condition: 'Good', 
    description: 'Ambulance Toyota Land Cruiser 4x4', 
    acquisitionDate: '2023-01-15',
    value: 2500000, 
    wilaya: 'Nouakchott Ouest', 
    coordinates: { lat: 18.0945, lng: -15.9680 },
    locationDetails: 'Hôpital National',
    documents: [],
    specificDetails: {
        brand: 'Toyota',
        model: 'Land Cruiser',
        plateNumber: '1234AA00',
        chassisNumber: 'JTE123456789'
    }
  },
  { 
    id: 'a2', 
    reference: 'I-2022-045', 
    ministryId: '2', 
    subEntity: 'Direction de la Pharmacie et des Laboratoires',
    type: 'RealEstate', 
    condition: 'Good', 
    description: 'Centre de Santé Communautaire Type B', 
    acquisitionDate: '2022-06-01',
    value: 14500000, 
    wilaya: 'Dakhlet Nouadhibou', 
    coordinates: { lat: 20.9388, lng: -17.0347 },
    locationDetails: 'Quartier Madrid',
    documents: [],
    specificDetails: {
        surfaceArea: '400',
        landTitle: 'TF-9088',
        usage: 'Santé'
    }
  },
  { 
    id: 'a3', 
    reference: 'E-2024-010', 
    ministryId: '1',
    subEntity: 'Direction Générale du Budget',
    type: 'IT', 
    condition: 'New', 
    description: 'Serveur de Données Sécurisé', 
    acquisitionDate: '2024-02-10',
    value: 650000, 
    wilaya: 'Nouakchott Nord', 
    coordinates: { lat: 18.0800, lng: -15.9500 },
    locationDetails: 'Datacenter MinFin',
    documents: [],
    specificDetails: {
        brand: 'Dell',
        serialNumber: 'SRV-999-X',
        specs: 'Xeon 64GB RAM'
    }
  },
  { 
    id: 'a4', 
    reference: 'R-2021-99', 
    ministryId: '3', 
    subEntity: 'Etablissement des Travaux d\'Entretien Routier (ETER)',
    type: 'RealEstate', 
    condition: 'NeedsRepair', 
    description: 'Bâtiment Administratif Annexe', 
    acquisitionDate: '2010-02-10',
    value: 8000000, 
    wilaya: 'Adrar', 
    coordinates: { lat: 20.5167, lng: -13.0500 },
    locationDetails: 'Atar Centre',
    documents: [],
    specificDetails: {
        surfaceArea: '150',
        landTitle: 'TF-1010',
        usage: 'Bureau'
    }
  }
];