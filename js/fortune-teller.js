function my_alert() {
  let text =
  ["Сирийский Олег. Всем нам иногда нужно немного погрустить :*",
  "Сирийский Серёжа. Как насчёт отжечь что-нибудь этакое?",
  "Птица Серёжа. Отстаивай честь своей внутренней манюни, даже если она забирает контроль над твоим телом!",
  "Наёмник Олег. Кажется, нужно срочно позвать кого-нибудь на свиданку. Или сводить себя. Иначе что-то отлюбит вас с двух сторон.",
  "ГП Серёжа. Самое время принарядиться и выйти на улицу!",
  "ГП Олег. Тренировочку, вкусно покушать, повздыхать над прекрасным, погладить собаку и не ссориться с братюнями.",
  "Князь Волков. Какой бы жопой ни выглядел мир, ты вывезешь.",
  "Демон Сергей. Иногда придется подставиться ради великой цели.",
  "Бессмертная Лера. Как же заебали идиоты, правда?",
  "Бессмертный Олег. Ты на это не подписывался. Зато ты самый любимый сын.",
  "Бессмертный Серёжа. Ты уверен, что поступаешь правильно?",
  "Маг Земли Серёжа. Подумай дважды прежде, чем открыть рот ;)",
  "Маг Огня Олег. Не важно, что у тебя в кошельке. Главное - насколько любящее твоё сердце!",
  "Миледи Серина. Не важно, что говорят крысы за спиной у кисы.",
  "Полковник Волков. Что нас не убьет - сделает сильнее.",
  "Кицуне Серёжа. Сегодня ты можешь откусить кому-нибудь литсо. Будь бдителен!",
  "Оками Олег. Сабай - это состояние души. Если тебя из него выводят - не постесняйся дать леща.",
  "Спецназовец Олег. Что бы ни происходило снаружи, дома тебя всегда ждёт вкусная булоцка. Иди домой.",
  "Художник Серёжа. Твоя жизнь не скучная, а образцово офигенная.",
  "Супер Олег. Ненутысупер конечно! Держись подальше только от твиттера и тик-тока.",
  "СММ-щик Серёжа. Соберись и выкати своему боссу всё, что накипело!",
  "Алая Ведьма Серёжа. Завязывай копаться в чужом дерьме, брат",
  "Зимний Солдат Олег. А чё зимний-то? Летом не служишь? И вот не служи лучше. Побудь денек доминантом",
  "Искатель Олег. Что ищется - то найдется, главное отпустить.",
  "Инквизитор Серёжа. Не обязательно сжигать людей, чтобы услышать от них то, что ты хочешь. А, это не та Инквизиция... Хотя, стоп. Какая разница.",
  "Сердцебит Олег. От твоих мувов сердечко будет делать боньк. Главное не довести никого до инсульта.",
  "Sunsummoner Серёжа. Гори, шобы светить, понял?",
  "Джентльмен Олег. Есть ощущение, что ты единственный взрослый в этом детском саде. Глубокий вдох. Однажды у людей появятся мозги. Или нет. Лучше не надеяться.",
  "Джентльмен Серёжа. Гиперфиксации это хорошо. Лучше, чем героин.",
  "Космический Серёжа. Не обязательно быть таким душным!",
  "Космический Олег. Монстров значит убиваешь, а крашу признаться в чувствах боишься? Самое время сказать людям, как они тебе нравятся",
  "Школьник Олег. Можно пожить в отрицании, но только чуть-чуть.",
  "Школьник Серёжа. Хочешь сделать что-то хорошо - сделай это сам.",
  "Рокер Олег. Если ты поделишься своей драмой - её определенно заценят.",
  "Стритартер Серёжа. Сегодня хороший день для того, чтобы бросить пить.",
  "Серёжа из Терминатора. Одна ошибка и ты ошибся.",
  "Терминатор Олег. Прошлого не вернуть, но над ним можно порефлексировать.",
  "Модельер Серёжа. Возраст - это всего лишь цифра. Party girls don't get old.",
  "Молоденький Олежа из футуризма. Сегодня ты самый лучший щеночек и заслужил всего на свете!",
  "Главная судья Ольга. Мужики всегда всё портят, опять тебе за всех отрабатывать, и вообще почему вчерашние версии тебя портят жизнь тебе сегодняшней?",
  "TVA-лейтенант Серёжа. Внезапно, ты сабмиссив. Внезапно, тобой руководит женщина. Не внезапно - это очень кайфово. Энджой ер тайм биин боттом.",
  ];
  min = 0;
  max = text.length-1;
  out = Math.floor(Math.random()*(max-min+1))+min;
  document.getElementById("button_text").innerHTML = text[out];
  }