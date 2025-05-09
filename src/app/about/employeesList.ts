import type { EmployeeModel } from '$models/EmployeeModel';
import annaPhotoSrc from '$assets/photos/photo_Anna.jpeg';
import igorPhotoSrc from '$assets/photos/photo_Igor.png';
import emilPhotoSrc from '$assets/photos/photo_Emil.jpeg';
import anastasiaPhotoSrc from '$assets/photos/photo_Anastasia.jpeg';
import kristinaPhotoSrc from '$assets/photos/photo_Kristina.jpeg';

export const employeesList: EmployeeModel[] = [
  {
    photoSrc: kristinaPhotoSrc,
    name: 'Кристина Новикова',
    text: [
      'Специалист в области регулирования IT-сферы и обороте криптовалют в СНГ. Предоставляет сопровождение российским и международным компаниям, включая поддержку при вступлении в Парки высоких технологий и соблюдении их режимов.',
      'Имеет опыт работы с крупными криптопроектами в Беларуси и на международной арене, включая сопровождение уголовных дел по киберпреступлениям и соблюдению правил ПОД/ФТ в США и Европе. Анализирует бизнес - модели криптопроектов на соответствие законодательству и помогает в создании криптобирж, криптообменников и децентрализованных платформ.',
      'Оказывает правовую помощь в получении лицензий для работы с персональными данными на территории России.',
    ],
  },
  {
    photoSrc: annaPhotoSrc,
    name: 'Анна Тананян',
    text: [
      'Направление - Интеллектуальная собственность, разблокировка биржевых аккаунтов, сопровождение.',
      'Разблокировала более  200 млн. рублей за 2 года и зарегистрировала ряд товарных знаков для организаций и индивидуальных предпринимателей.',
      'Успешный опыт работы, охватывающий множество проектов в сложных и динамично развивающихся сферах, таких как криптовалютные компании, правовое сопровождение IT и информационного бизнеса, а также в роли AML-офицера (Anti-Money Laundering) у оператора обмена криптовалют.',
    ],
  },
  {
    photoSrc: igorPhotoSrc,
    name: 'Игорь Ильиных',
    text: [
      'Адвокат по уголовным делам, связанным с криптовалютами.',
      'Ранее работал в Следственном комитете. Имеет глубокие знания в области уголовного права и опыт работы с делами, связанными с хищением криптоактивов.',
      'Имеет прекращенные уголовные дела на следствии и в суде.',
    ],
  },
  {
    photoSrc: emilPhotoSrc,
    name: 'Эмиль Сеантеблев',
    text: [
      'AML-специалист, работающий в криптовалютном секторе с 2017 года, имеет опыт работы в крупнейших биржах Восточной Европы. Он проводил расследования подозрительных операций и подготавливал отчёты о подозрительной деятельности (SAR). Обеспечивал соблюдение международных норм AML и внутренних политик.',
      'Взаимодействовал с другими подразделениями для минимизации рисков финансовых преступлений.',
      'Имеет глубокое понимание работы AML-специалистов изнутри.',
    ],
  },
  {
    photoSrc: anastasiaPhotoSrc,
    name: 'Анастасия Колесникова',
    text: [
      'AML-специалист с опытом работы с 2020 года. Занималась обеспечением соответствия международным стандартам FATF и требованиям внутреннего контроля. Имеет глубокое понимание политики KYC/AML и практического применения риск-ориентированного подхода. Регулярно отслеживает изменения в международном регулировании и адаптирует процедуры под актуальные требования. Участвует в разработке и внедрении внутренних политик по противодействию отмыванию доходов и финансированию терроризма.',
      'Обладает опытом проведения проверки клиентов, мониторинга транзакций и подготовки отчётности. Умеет работать как с централизованными системами, так и в рамках децентрализованных решений.',
      'Гарантирует комплексный подход к управлению рисками и соответствию требованиям регуляторов.',
    ],
  },
];
