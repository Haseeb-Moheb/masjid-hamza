export interface IslamTopic {
  slug: string;
  category: string;
  icon: string;
  title: string;
  desc: string;
  content: string;
}

export const islamCategories = [
  "About Islam",
  "Common Misconceptions",
  "About Allah",
  "About Muhammad",
  "About Jesus",
  "About the Quran",
  "Becoming Muslim",
  "Answers to Racism & Justice",
];

export const islamTopics: IslamTopic[] = [

  // ── ABOUT ISLAM ──────────────────────────────────────────────────
  {
    slug: "purpose-of-creation",
    category: "About Islam",
    icon: "🌌",
    title: "What is the purpose of our creation?",
    desc: "Why did God create us? Islam provides a clear, profound answer to this fundamental question.",
    content: `
      <p>Non-believers are unable to provide any convincing reason for the existence of this universe or of human life. People who believe there is a Creator assume that creation occurred by His will. But in a world where everything is shown to have a purpose, it is natural for a human being to wonder about the purpose of his own creation.</p>

      <p>The Qur'an informs us that Allah created us for a test here on earth:</p>

      <blockquote>"Then did you think that We created you uselessly and that to Us you would not be returned?" [23:115-116]</blockquote>

      <p>A non-believer might decide that the objective of his life will be to collect wealth, obtain position or pursue pleasure to the greatest extent possible. But none of this will benefit him in the long run. According to His final scripture, God created man to test him with certain responsibilities [18:7, 67:2, 76:2]. He did not intend life on this earth to necessarily be comfortable or satisfying but merely a trial of limited duration, the rewards and punishments of which will be due in the Hereafter.</p>

      <p>Most of creation is "muslim" in that it is programmed to obey the physical laws set by God — this is why the universe functions with balanced equilibrium. Man, however, was given a free will and the ability to either obey or disobey. But God will not allow His universal balance to be upset indefinitely by defiant, corrupt and sinful people, so He only grants human beings a measure of freedom in a temporary world.</p>

      <p>The scheme of birth, development, decline and death provides each person with the opportunity to prove to himself without a doubt what he will deserve on the Day of Judgement — which God created for the manifestation of His ultimate justice.</p>

      <p>This life is very meaningful and purposeful to the believing Muslim because he realizes that it will determine his outcome and permanent position in the next life. He lives to earn the approval of his Creator in preparation for the final return to Him.</p>

      <blockquote>"I did not create the jinn and mankind except to worship Me." [51:56]</blockquote>

      <p>Worship in Islam is not limited to ritual prayer. Every action performed with the intention of pleasing Allah — working, caring for one's family, seeking knowledge, helping others — becomes an act of worship. This transforms every moment of a Muslim's life into something meaningful and purposeful.</p>

      <p>The Prophet Muhammad ﷺ said: "Take advantage of five before five: your youth before your old age, your health before your illness, your wealth before your poverty, your free time before your preoccupation, and your life before your death."</p>

      <p>This hadith captures the Islamic understanding of life's purpose — every moment is an opportunity to fulfill our purpose and prepare for what comes after.</p>
    `,
  },

  {
    slug: "non-muslim-scholars-on-islam",
    category: "About Islam",
    icon: "📚",
    title: "What Do Non-Muslim Scholars Say About Islam?",
    desc: "Historians, philosophers and thinkers from around the world have acknowledged the truth and impact of Islam.",
    content: `
      <p>The Islam that was revealed to Muhammad ﷺ is the continuation and culmination of all the preceding revealed religions, and hence it is for all times and all peoples. Throughout history, non-Muslim scholars, thinkers, and historians have studied Islam and offered remarkable observations about its truth, its Prophet, and its impact on humanity.</p>

      <h3>George Bernard Shaw</h3>
      <p>The famous Irish playwright and Nobel Prize winner wrote: "I have always held the religion of Muhammad in high estimation because of its wonderful vitality. It is the only religion which appears to me to possess that assimilating capacity to the changing phase of existence which can make itself appeal to every age. I have studied him — the wonderful man — and in my opinion, far from being an anti-Christ, he must be called the Saviour of Humanity. I believe that if a man like him were to assume the dictatorship of the modern world, he would succeed in solving its problems in a way that would bring it the much needed peace and happiness."</p>

      <h3>Mahatma Gandhi</h3>
      <p>Gandhi wrote in Young India: "I wanted to know the best of the life of one who holds today an undisputed sway over the hearts of millions of mankind. I became more than ever convinced that it was not the sword that won a place for Islam in those days in the scheme of life. It was the rigid simplicity, the utter self-effacement of the Prophet, the scrupulous regard for pledges, his intense devotion to his friends and followers, his intrepidity, his fearlessness, his absolute trust in God and in his own mission."</p>

      <h3>Thomas Carlyle</h3>
      <p>The Scottish historian wrote in Heroes and Hero Worship: "How one man single-handedly, could weld warring tribes and wandering Bedouins into a most powerful and civilized nation in less than two decades. The lies which well-meaning zeal has heaped round this man are disgraceful to ourselves only. A silent great soul, one of that who cannot but be earnest. He was to kindle the world; the world's Maker had ordered so."</p>

      <h3>Annie Besant</h3>
      <p>The British socialist and women's rights activist wrote: "It is impossible for anyone who studies the life and character of the great Prophet of Arabia, who knows how he taught and how he lived, to feel anything but reverence for that mighty Prophet, one of the great messengers of the Supreme. And although in what I put to you I shall say many things which may be familiar to many, yet I myself feel whenever I re-read them, a new way of admiration, a new sense of reverence for that mighty Arabian teacher."</p>

      <h3>Michael Hart</h3>
      <p>In his book The 100: A Ranking of the Most Influential Persons in History, non-Muslim astrophysicist Michael Hart ranked Prophet Muhammad ﷺ as the single most influential person in all of human history — above Jesus, Newton, and all others. He wrote: "My choice of Muhammad to lead the list of the world's most influential persons may surprise some readers and may be questioned by others, but he was the only man in history who was supremely successful on both the religious and secular levels."</p>

      <h3>James Michener</h3>
      <p>The American author wrote in Reader's Digest: "Muhammad, the inspired man who founded Islam, was born about A.D. 570 into an Arabian tribe that worshipped idols. Orphaned at birth, he was always particularly solicitous of the poor and needy, the widow and the orphan, the slave and the downtrodden. At twenty he was already a successful businessman, and soon married a wealthy widow. But he was not a man to rest on worldly success. Deep within him was a religious instinct that led him often to a cave in the hills for meditation and prayer. We shall call him the Messenger, as he is known among one billion of his followers throughout the world."</p>
    `,
  },

  {
    slug: "concept-of-god-in-islam",
    category: "About Islam",
    icon: "☪️",
    title: "The Concept of God in Islam",
    desc: "Islam's concept of God is pure monotheism — Allah is One, Unique, and without partners or equals.",
    content: `
      <p>The Islamic concept of God is based on pure, unadulterated monotheism. The Arabic word for God is "Allah" — a word that has no plural and no gender, which itself reflects the absolute oneness and uniqueness of God in Islamic theology.</p>

      <p>Islam teaches that Allah is the same God worshipped by all the prophets — from Adam to Abraham, Moses, Jesus, and Muhammad (peace be upon them all). There is only one God, and all the prophets came with the same essential message: worship God alone and live righteously.</p>

      <h3>The Oneness of Allah — Tawheed</h3>
      <p>The foundation of Islam is Tawheed — the absolute oneness of God. This means:</p>
      <ul>
        <li>There is only One God who created and sustains all of existence</li>
        <li>Only Allah deserves to be worshipped — no partners, no intercessors, no idols</li>
        <li>Allah alone possesses all divine attributes in their absolute perfection</li>
      </ul>

      <blockquote>"Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent." [112:1-4]</blockquote>

      <h3>What Islam Rejects</h3>
      <p>Islam explicitly rejects:</p>
      <ul>
        <li><strong>Polytheism</strong> — the belief in multiple gods</li>
        <li><strong>Trinity</strong> — the Christian doctrine of Father, Son, and Holy Spirit</li>
        <li><strong>Anthropomorphism</strong> — portraying God in human form or with human limitations</li>
        <li><strong>Pantheism</strong> — the belief that God and the universe are the same</li>
      </ul>

      <blockquote>"If there were within the heavens and earth gods besides Allah, they both would have been ruined. So exalted is Allah, Lord of the Throne, above what they describe." [21:22]</blockquote>

      <h3>The 99 Names of Allah</h3>
      <p>Allah has revealed 99 beautiful names (Asma ul-Husna) that describe His perfect attributes:</p>
      <ul>
        <li><strong>Ar-Rahman</strong> — The Most Merciful</li>
        <li><strong>Ar-Rahim</strong> — The Most Compassionate</li>
        <li><strong>Al-Malik</strong> — The King</li>
        <li><strong>Al-Quddus</strong> — The Holy</li>
        <li><strong>As-Salam</strong> — The Source of Peace</li>
        <li><strong>Al-Khaliq</strong> — The Creator</li>
        <li><strong>Al-Hakeem</strong> — The All-Wise</li>
        <li><strong>Al-Wadud</strong> — The Most Loving</li>
        <li><strong>Al-Ghaffar</strong> — The Oft-Forgiving</li>
        <li><strong>Al-Qadir</strong> — The All-Powerful</li>
      </ul>

      <h3>Allah's Relationship with Humanity</h3>
      <p>Despite His infinite greatness, Allah is not distant or uncaring. The Quran says:</p>
      <blockquote>"And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." [2:186]</blockquote>
      <blockquote>"And We have already created man and know what his soul whispers to him, and We are closer to him than his jugular vein." [50:16]</blockquote>

      <p>This direct, intimate relationship between the Creator and His creation is one of the most beautiful aspects of Islamic theology. There is no need for priests, intermediaries, or confessionals. Every human being can communicate directly with Allah at any time, in any place, in any language.</p>
    `,
  },

  {
    slug: "status-of-women-in-islam",
    category: "About Islam",
    icon: "🌸",
    title: "Status of Women in Islam",
    desc: "Islam elevated the status of women 1,400 years ago, granting rights the West only recognized centuries later.",
    content: `
      <p>One of the most common misconceptions about Islam is that it oppresses women. In reality, Islam elevated the status of women over 1,400 years ago — long before the modern women's rights movement. In pre-Islamic Arabia, women were treated as property, female infanticide was common, and women had no legal rights whatsoever. Islam changed all of this completely.</p>

      <h3>Spiritual Equality</h3>
      <p>The Quran explicitly states that men and women are equal in the sight of Allah:</p>
      <blockquote>"Indeed, the Muslim men and Muslim women, the believing men and believing women, the obedient men and obedient women, the truthful men and truthful women... Allah has prepared for them forgiveness and a great reward." [33:35]</blockquote>
      <blockquote>"Whoever does righteousness, whether male or female, while he is a believer — We will surely cause him to live a good life, and We will surely give them their reward according to the best of what they used to do." [16:97]</blockquote>

      <h3>Right to Education</h3>
      <p>The Prophet Muhammad ﷺ said: "Seeking knowledge is an obligation upon every Muslim." This applies equally to men and women. In the early Islamic civilization, women were scholars, teachers, and transmitters of hadith. Aisha (RA), the wife of the Prophet ﷺ, was one of the greatest scholars of Islam and taught thousands of students.</p>

      <h3>Financial Rights</h3>
      <p>Islam granted women the right to own property, inherit, conduct business, and keep their own earnings — rights that women in Europe only gained in the 19th and 20th centuries. A Muslim woman's wealth is her own; her husband has no legal claim to it.</p>

      <h3>Marriage Rights</h3>
      <ul>
        <li>A woman's full consent is required for marriage — a marriage without consent is invalid in Islamic law</li>
        <li>She has the right to set conditions in her marriage contract</li>
        <li>She has the right to seek divorce (Khul') if the marriage is not working</li>
        <li>She retains her maiden name after marriage</li>
        <li>She must receive a Mahr (dowry) from the groom — a gift that belongs solely to her</li>
      </ul>

      <h3>The Status of Mothers</h3>
      <p>A man came to the Prophet ﷺ and asked: "O Messenger of Allah, who is most deserving of my good companionship?" The Prophet said: "Your mother." The man asked: "Then who?" The Prophet said: "Your mother." The man asked again: "Then who?" The Prophet said: "Your mother." The man asked a fourth time: "Then who?" The Prophet said: "Your father." [Bukhari & Muslim]</p>

      <h3>The Hijab — Modesty and Identity</h3>
      <p>The hijab is often cited as a symbol of oppression, but Muslim women who wear it overwhelmingly describe it as liberating. The Quran instructs believing women to dress modestly [24:31, 33:59]. Rather than being oppressive, the hijab:</p>
      <ul>
        <li>Shifts focus from physical appearance to character and intellect</li>
        <li>Protects women from being judged or objectified by their looks</li>
        <li>Is a declaration of faith and identity</li>
        <li>Is an act of obedience to Allah that carries spiritual reward</li>
      </ul>

      <p>The Prophet ﷺ said: "The world is a provision, and the best provision of the world is a pious woman." Islam honors women as mothers, wives, daughters, and scholars — and their rights were established by divine decree, not by social movements.</p>
    `,
  },

  // ── COMMON MISCONCEPTIONS ────────────────────────────────────────
  {
    slug: "islam-science-technology",
    category: "Common Misconceptions",
    icon: "🔬",
    title: "Islam's View on Education, Science & Technology",
    desc: "Islam strongly encourages the pursuit of knowledge — the very first word revealed was 'Read'.",
    content: `
      <p>One of the greatest misconceptions about Islam is that it is somehow incompatible with science and modern education. In reality, Islam has always been the greatest champion of knowledge. The very first word revealed in the Quran was <strong>"Iqra"</strong> — meaning "Read" or "Recite."</p>

      <blockquote>"Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the most Generous — Who taught by the pen — taught man that which he knew not." [96:1-5]</blockquote>

      <h3>Islam's Command to Seek Knowledge</h3>
      <p>The Prophet Muhammad ﷺ made numerous statements emphasizing the importance of education:</p>
      <ul>
        <li>"Seeking knowledge is an obligation upon every Muslim."</li>
        <li>"Seek knowledge even if you have to go to China."</li>
        <li>"The ink of the scholar is more sacred than the blood of the martyr."</li>
        <li>"Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise."</li>
      </ul>

      <h3>The Islamic Golden Age</h3>
      <p>During the Islamic Golden Age (8th–13th centuries CE), Muslim scholars made revolutionary contributions to virtually every field of human knowledge:</p>

      <ul>
        <li><strong>Al-Khwarizmi</strong> — invented algebra (the word "algebra" comes from his work "Al-Jabr"). The word "algorithm" is derived from his name.</li>
        <li><strong>Ibn Sina (Avicenna)</strong> — his Canon of Medicine was the standard medical textbook in European universities for over 600 years.</li>
        <li><strong>Ibn al-Haytham</strong> — father of modern optics and the scientific method. He invented the first camera obscura.</li>
        <li><strong>Al-Biruni</strong> — pioneer in anthropology, geodesy, and astronomy. He calculated the circumference of the Earth with remarkable accuracy.</li>
        <li><strong>Jabir ibn Hayyan</strong> — father of chemistry. He developed techniques of distillation, crystallization, and filtration.</li>
        <li><strong>Al-Zahrawi</strong> — father of modern surgery. He invented over 200 surgical instruments still used today.</li>
        <li><strong>Ibn Rushd (Averroes)</strong> — his commentaries on Aristotle shaped European philosophy for centuries.</li>
      </ul>

      <h3>Science in the Quran</h3>
      <p>The Quran contains numerous references to natural phenomena that were not scientifically understood until centuries after the revelation:</p>
      <ul>
        <li>The expansion of the universe [51:47]</li>
        <li>The development of the human embryo [23:12-14]</li>
        <li>The barrier between salt water and fresh water [55:19-20]</li>
        <li>Mountains as stabilizers for the earth [78:6-7]</li>
        <li>The water cycle [39:21]</li>
        <li>The protective function of the atmosphere [21:32]</li>
      </ul>

      <p>Professor Keith Moore, one of the world's leading embryologists, stated after studying the Quranic descriptions of embryonic development: "It has been a pleasure for me to help clarify statements in the Quran about human development. It is clear to me that these statements must have come to Muhammad from God, because almost all of this knowledge was not discovered until many centuries later."</p>

      <p>Far from opposing science, Islam views the study of creation as a path to recognizing the Creator. The Quran repeatedly calls people to observe, reflect, and use their intellect.</p>
    `,
  },

  {
    slug: "hijab-head-covers",
    category: "Common Misconceptions",
    icon: "🧕",
    title: "Head Covers (Hijab)",
    desc: "Understanding the Islamic headscarf — its purpose, meaning, and significance to Muslim women.",
    content: `
      <p>The hijab is one of the most visible and most misunderstood aspects of Islam in the Western world. Many non-Muslims assume it is a symbol of oppression imposed on women by men. The reality, as understood and lived by Muslim women themselves, is very different.</p>

      <h3>What is the Hijab?</h3>
      <p>The word "hijab" in Arabic literally means "covering," "barrier," or "partition." In Islamic practice, it refers to the modest dress code prescribed for Muslim women, which typically includes covering the hair, neck, and body while leaving the face and hands visible. The concept of hijab also extends to modesty in behavior, speech, and conduct for both men and women.</p>

      <h3>The Quranic Command</h3>
      <blockquote>"And tell the believing women to reduce some of their vision and guard their private parts and not expose their adornment except that which appears thereof and to wrap their headcovers over their chests..." [24:31]</blockquote>
      <blockquote>"O Prophet, tell your wives and your daughters and the women of the believers to bring down over themselves part of their outer garments. That is more suitable that they will be known and not be abused." [33:59]</blockquote>

      <h3>Why Do Muslim Women Wear Hijab?</h3>
      <p>Muslim women wear hijab for several deeply personal and spiritual reasons:</p>
      <ul>
        <li><strong>Obedience to Allah</strong> — It is a divine command, and following it is an act of worship</li>
        <li><strong>Identity</strong> — It is a visible declaration of faith and Muslim identity</li>
        <li><strong>Dignity</strong> — It shifts focus from physical appearance to character and intellect</li>
        <li><strong>Protection</strong> — It guards against being judged or objectified based on appearance</li>
        <li><strong>Liberation</strong> — Many women describe feeling liberated from beauty standards and societal pressure</li>
      </ul>

      <h3>Hijab is a Choice of Faith</h3>
      <p>In Islam, there is no compulsion in religion [2:256]. The hijab is worn as a personal commitment to faith. Surveys consistently show that Muslim women who wear hijab in Western countries do so by personal choice. Many Western Muslim women who were not raised with hijab choose to adopt it as an adult expression of their faith and identity.</p>

      <h3>Men and Modesty</h3>
      <p>It is important to note that modesty in Islam is not only for women. The Quran addresses men first regarding modesty of the gaze: "Tell the believing men to reduce some of their vision and guard their private parts." [24:30] Muslim men are also required to dress modestly and behave with decency.</p>

      <h3>Historical Context</h3>
      <p>Head coverings for women were common across many cultures and religions long before Islam — Jewish women covered their hair, Christian nuns wear habits, and many Eastern cultures practiced modesty in dress. Islam formalized and spiritualized this practice, giving it theological meaning.</p>

      <p>Today, millions of Muslim women across the world wear hijab with pride, confidence, and conviction. Their voices should be heard over the assumptions of those who have never lived the experience.</p>
    `,
  },

  {
    slug: "kaaba-not-idol-worship",
    category: "Common Misconceptions",
    icon: "🕋",
    title: "If Islam opposes idol worship, why do Muslims pray toward the Kaaba?",
    desc: "Muslims don't worship the Kaaba — it is simply a unified direction for prayer, not an object of worship.",
    content: `
      <p>This is one of the most frequently asked questions about Islam, and it deserves a clear and thorough answer. The short answer is: Muslims do not worship the Kaaba. They face it during prayer as a unified direction — a point of focus — not as an object of worship.</p>

      <h3>What is the Kaaba?</h3>
      <p>The Kaaba is a cube-shaped structure located in the center of the Masjid al-Haram mosque in Mecca, Saudi Arabia. According to Islamic tradition, it was originally built by Prophet Ibrahim (Abraham) and his son Ismail (Ishmael) as the first house dedicated to the worship of the One God.</p>

      <blockquote>"And when We designated for Abraham the site of the House, saying: Do not associate anything with Me and purify My House for those who perform Tawaf and those who stand in prayer and those who bow and prostrate." [22:26]</blockquote>

      <h3>Why Do Muslims Face the Kaaba?</h3>
      <p>Muslims face the Kaaba (the direction is called the Qibla) during their five daily prayers for several reasons:</p>
      <ul>
        <li><strong>Unity</strong> — All 1.8 billion Muslims worldwide face the same direction in prayer, symbolizing their unity as one Ummah (community)</li>
        <li><strong>Order and discipline</strong> — Just as people in a meeting face a common point, having one direction creates order in worship</li>
        <li><strong>Divine command</strong> — Allah commanded believers to face the Masjid al-Haram [2:144, 2:149-150]</li>
        <li><strong>Historical continuity</strong> — It connects Muslims to the legacy of Prophet Ibrahim who built the Kaaba</li>
      </ul>

      <h3>The Kaaba is NOT Worshipped</h3>
      <p>When Muslims pray, they are praying TO Allah — not to the Kaaba. The Kaaba is simply a direction. If the Kaaba were destroyed tomorrow (Allah forbid), Muslims would still pray to Allah — just without a physical focal point.</p>

      <p>Prophet Ibrahim himself is the father of monotheism — the man who physically destroyed the idols of his people and called humanity to worship Allah alone. It would be completely contradictory to then worship a building he constructed.</p>

      <p>During Hajj, Muslims walk around the Kaaba (Tawaf) — but this too is an act of worship to Allah, not to the building. The Quran makes this clear:</p>

      <blockquote>"It is not their meat nor their blood that reaches Allah; it is your piety that reaches Him." [22:37]</blockquote>

      <h3>A Simple Analogy</h3>
      <p>Imagine people praying in different rooms of a large building, all facing toward the center of the building. None of them worship the center — they simply use it as a focal point of orientation. This is precisely how Muslims relate to the Kaaba.</p>

      <p>Allah is everywhere and hears all prayers regardless of direction. The Qibla is a practical human institution for unity and order — not an object of veneration.</p>
    `,
  },

  {
    slug: "life-after-death",
    category: "Common Misconceptions",
    icon: "🌅",
    title: "How do you know there is life after death?",
    desc: "The Islamic perspective on the Hereafter — its certainty, logical necessity, and what awaits us.",
    content: `
      <p>Belief in life after death (Akhirah) is one of the six pillars of Islamic faith and one of the most central concepts in the Quran. Islam presents both rational and scriptural evidence for the existence of an afterlife.</p>

      <h3>The Argument from Justice</h3>
      <p>In this world, we observe that justice is often not served. Innocent people suffer while oppressors prosper. Criminals escape punishment. Good people die without receiving the reward they deserve. A just, all-knowing, all-powerful God would not allow injustice to go unaddressed forever.</p>

      <p>The afterlife is where ultimate, perfect justice is served. Every atom's weight of good and evil will be accounted for:</p>

      <blockquote>"So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it." [99:7-8]</blockquote>

      <h3>The Argument from Human Nature</h3>
      <p>Every human being has an innate sense of accountability and a longing for ultimate justice. We feel — deeply and universally — that life cannot simply end in nothingness. This universal human experience points to the reality of judgment and an afterlife. Our very nature yearns for what is true.</p>

      <h3>The Argument from Divine Power</h3>
      <blockquote>"Does man think that he will be left neglected? Was he not a sperm from semen emitted? Then he was a clinging clot, and Allah created him and proportioned him... Is not that Creator able to give life to the dead?" [75:36-40]</blockquote>

      <p>The God who created us from nothing can certainly recreate us. The God who formed us from a single drop of fluid can certainly resurrect us on the Day of Judgment.</p>

      <h3>What Happens After Death?</h3>
      <p>Islam teaches a detailed account of what occurs after death:</p>
      <ul>
        <li><strong>Barzakh</strong> — the period between death and resurrection, where the soul experiences a taste of its eventual fate</li>
        <li><strong>Day of Resurrection</strong> — all people are resurrected for judgment</li>
        <li><strong>The Judgment</strong> — each person's deeds are weighed and accounted for with perfect justice</li>
        <li><strong>Jannah (Paradise)</strong> — eternal happiness, beauty, and closeness to Allah for the believers</li>
        <li><strong>Jahannam (Hell)</strong> — a place of suffering for those who rejected the truth and lived unrighteous lives</li>
      </ul>

      <h3>The Purpose of Believing in the Afterlife</h3>
      <p>Belief in the afterlife gives life profound meaning and transforms behavior. When a person knows they will be accountable for every action — seen and unseen — they live with greater honesty, compassion, and purpose.</p>

      <p>The Prophet ﷺ said: "Be in this world as if you were a stranger or a traveler passing through." This life is the journey — the afterlife is the destination.</p>
    `,
  },

  // ── ABOUT ALLAH ──────────────────────────────────────────────────
  {
    slug: "who-is-allah",
    category: "About Allah",
    icon: "✨",
    title: "Who is Allah?",
    desc: "Allah is the Arabic name for God — the same God worshipped by Abraham, Moses, and Jesus.",
    content: `
      <p>Allah is the name of the true One God in the Arabic language. In the Hebrew language His name is Eloh, Elohim for respect. It is well known that when a word is borrowed from one language to another, its spelling and pronunciation is often altered. It is therefore reasonable to say that Eloh and Allah are names of the same Deity of Abraham believed by the three monotheistic religions of Judaism, Christianity and Islam.</p>

      <p>Islam is the most rigorously monotheistic religion among the three — dedicated to the worship of Allah, never seen by a human eye.</p>

      <h3>Allah, the One Only</h3>
      <blockquote>"Proclaim: Allah is One. Allah is Eternal. He neither begets nor was begotten." [112:1-4]</blockquote>
      <blockquote>"Nothing is like unto Him." [42:11]</blockquote>
      <blockquote>"If there were therein Gods besides Allah, then verily both the heavens and the earth would have collapsed into disorder and chaos. Glorified be Allah, the Lord of the Throne, transcendent beyond all they ascribe unto Him." [21:22]</blockquote>
      <blockquote>"Sight can never reach Him; His sight reaches all things." [6:103]</blockquote>
      <blockquote>"And proclaim: Praise be to Allah, Who has not taken unto Himself a son, and Who has no partner in the Sovereignty." [17:111]</blockquote>
      <blockquote>"Allah! There is no God save Him." [3:2, 2:255]</blockquote>

      <h3>Attributes of Allah</h3>
      <p>Muslims speak about ninety-nine attributes of Allah. A few are given in the following verses:</p>
      <blockquote>"And He is the Mighty, the Wise. His is the Sovereignty of the heavens and the earth; He gives life and He gives death; and He is able to do all things. He is the First and the Last, and the Outward and the Inward; and He is the Knower of all things." [57:1-3]</blockquote>
      <blockquote>"Allah is He, other than whom there is no other god; Who knows both what is hidden and what can be witnessed; He is the Most Gracious, Most Merciful. Allah is He, other than whom there is no other god; the Sovereign, the Holy One, the Source of Peace, the Guardian of Faith, the Preserver of Safety, the Exalted in Might, the Irresistible, the Supreme: Glory to Allah! He is above the partners they attribute to Him." [59:22-23]</blockquote>

      <h3>Allah's Mercy</h3>
      <p>Among all of Allah's attributes, His mercy is emphasized most prominently. Every chapter of the Quran (except one) begins with "Bismillah ir-Rahman ir-Rahim" — "In the name of Allah, the Most Merciful, the Most Compassionate."</p>

      <p>The Prophet ﷺ said: "Allah has one hundred parts of mercy, of which He sent down one between the jinn, humans, animals and insects, by which they are compassionate and merciful to one another, and by which wild animals are kind to their offspring. And Allah has kept back ninety-nine parts of mercy to show mercy to His slaves on the Day of Resurrection." [Muslim]</p>

      <h3>Allah's Closeness to Us</h3>
      <blockquote>"And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." [2:186]</blockquote>
      <blockquote>"We are closer to him than his jugular vein." [50:16]</blockquote>

      <p>Allah knows our every thought, hears our every prayer, and is always near to those who seek Him. This is the God of Islam — infinite in power and wisdom, yet intimately close to every human heart.</p>
    `,
  },

  {
    slug: "who-do-muslims-worship",
    category: "About Allah",
    icon: "🤲",
    title: "Who Do Muslims Worship?",
    desc: "Muslims worship the same God as Jews and Christians — the God of Abraham, the Creator of all things.",
    content: `
      <p>Muslims worship Allah — the One God, the Creator and Sustainer of all that exists. This is the same God worshipped by the prophets Abraham, Moses, and Jesus (peace be upon them all). The word "Allah" is simply the Arabic name for God — Arab Christians and Arab Jews also use the word "Allah" when referring to God in Arabic.</p>

      <h3>The God of All Prophets</h3>
      <p>Islam teaches that all the prophets — from Adam to Noah, from Abraham to Moses, from Jesus to Muhammad (peace be upon them all) — came with the same essential message: worship the One God alone and live righteously. The Quran addresses the People of the Book (Jews and Christians):</p>

      <blockquote>"Say: O People of the Scripture, come to a word that is equitable between us and you — that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah." [3:64]</blockquote>

      <h3>The Five Daily Prayers</h3>
      <p>The most visible expression of Muslim worship is the five daily prayers (Salah). Muslims pray at dawn, midday, afternoon, sunset, and night — turning to face the Kaaba in Mecca and reciting from the Quran in Arabic while performing specific movements of standing, bowing, and prostrating.</p>

      <p>The prostration (Sujood) — placing the forehead on the ground — is the most powerful expression of submission and worship. It is the moment when a human being is physically at their lowest, while spiritually closest to Allah.</p>

      <h3>Worship Beyond Prayer</h3>
      <p>In Islam, worship extends far beyond ritual prayer. The Prophet ﷺ taught that every good deed performed with the intention of pleasing Allah is an act of worship:</p>
      <ul>
        <li>Feeding the poor is worship</li>
        <li>Smiling at a brother or sister is worship</li>
        <li>Seeking knowledge is worship</li>
        <li>Working honestly to support one's family is worship</li>
        <li>Removing harm from the road is worship</li>
      </ul>

      <blockquote>"I did not create the jinn and mankind except to worship Me." [51:56]</blockquote>

      <h3>No Intermediaries</h3>
      <p>One of the most distinctive aspects of Islamic worship is that it requires no intermediaries. There are no priests, confessionals, or saints to go through. Every person has a direct, personal relationship with Allah. Anyone, anywhere, at any time, can call upon Allah directly and be heard.</p>

      <p>This directness is one of the most powerful and liberating aspects of Islamic faith. The Creator of the universe is always accessible — always listening.</p>
    `,
  },

  {
    slug: "one-true-god",
    category: "About Allah",
    icon: "🌟",
    title: "The One True God",
    desc: "An exploration of monotheism and why Islam's concept of God is the most rational and pure.",
    content: `
      <p>Monotheism — the belief in one God — is the foundation of Islam, just as it was the foundation of the message of every prophet sent throughout human history. The Quran calls this belief "Tawheed" — the absolute, uncompromising oneness of God.</p>

      <h3>The Rational Argument for One God</h3>
      <p>The existence of one Creator is supported by reason and observation:</p>

      <blockquote>"If there were within the heavens and earth gods besides Allah, they both would have been ruined. So exalted is Allah, Lord of the Throne, above what they describe." [21:22]</blockquote>

      <p>Consider: if multiple gods existed, they would have competing wills, competing plans, and competing power. The result would be chaos. Yet the universe operates with astonishing harmony, precision, and order — from the orbit of galaxies to the structure of atoms. This universal harmony is itself one of the greatest proofs of a single, supreme Creator.</p>

      <h3>The Fitrah — Innate Recognition of God</h3>
      <p>Islam teaches that every human being is born with a Fitrah — an innate disposition to recognize the existence of one God. The Prophet ﷺ said: "Every child is born in a state of Fitrah, then his parents make him into a Jew, a Christian or a Zoroastrian." [Bukhari & Muslim]</p>

      <p>This is why, in moments of extreme crisis or danger, even those who claim not to believe in God often instinctively cry out to a higher power. The recognition of God is written into human nature.</p>

      <h3>What Monotheism Demands</h3>
      <p>The concept of the One True God in Islam means:</p>
      <ul>
        <li><strong>Worship Allah alone</strong> — no idols, no saints, no intermediaries</li>
        <li><strong>Love Allah above all things</strong> — He is the source of all goodness and blessing</li>
        <li><strong>Fear Allah alone</strong> — ultimate power belongs only to Him</li>
        <li><strong>Trust Allah completely</strong> — He is Al-Wakeel, the Trustee of all affairs</li>
        <li><strong>Obey Allah's commandments</strong> — living according to His guidance</li>
      </ul>

      <h3>The Freedom of Monotheism</h3>
      <p>Tawheed liberates human beings from slavery to other humans, to wealth, to status, to superstition, and to fear. When you worship only the Creator of everything, you are freed from worshipping anything created. This is true freedom — the freedom of the soul that bows only to Allah.</p>

      <p>As Rabi ibn Amer said to the Persian commander Rustam before the Battle of Qadisiyyah: "Allah has sent us to deliver people from the worship of people to the worship of the Lord of people, from the narrowness of this world to the vastness of this world and the next, and from the oppression of religions to the justice of Islam."</p>
    `,
  },

  // ── ABOUT MUHAMMAD ────────────────────────────────────────────────
  {
    slug: "prophet-muhammad-mercy-to-mankind",
    category: "About Muhammad",
    icon: "🌙",
    title: "Prophet Muhammad ﷺ — Mercy to Mankind",
    desc: "The life and legacy of the final messenger, described by Allah as a mercy to all of creation.",
    content: `
      <p>Prophet Muhammad ﷺ (peace be upon him) was born in Mecca in 570 CE. He is believed by Muslims to be the final prophet and messenger of Allah, sent to guide all of humanity until the Day of Judgment. Allah describes him in the Quran with one of the most profound descriptions given to any human being:</p>

      <blockquote>"And We have not sent you except as a mercy to the worlds." [21:107]</blockquote>

      <h3>His Early Life</h3>
      <p>Muhammad ﷺ was born into the noble tribe of Quraysh in Mecca. His father Abdullah died before his birth, and his mother Aminah died when he was just six years old. He was raised first by his grandfather Abdul-Muttalib, then by his uncle Abu Talib.</p>

      <p>Even before receiving revelation, he was known throughout Mecca by two titles: <strong>Al-Amin</strong> (The Trustworthy) and <strong>Al-Sadiq</strong> (The Truthful). Even his enemies never accused him of lying before his prophethood.</p>

      <h3>The Revelation</h3>
      <p>At age 40, while meditating in the Cave of Hira, the Angel Jibreel (Gabriel) came to him with the first revelation: "Read in the name of your Lord who created..." [96:1]. This marked the beginning of 23 years of prophethood during which the entire Quran was revealed.</p>

      <h3>His Mercy Toward All</h3>
      <p>The Prophet's ﷺ mercy extended to every category of creation:</p>
      <ul>
        <li><strong>To enemies</strong> — When he conquered Mecca after years of persecution, he granted amnesty to his enemies rather than taking revenge</li>
        <li><strong>To the poor and orphans</strong> — He was known for his constant concern for the most vulnerable members of society</li>
        <li><strong>To women</strong> — He elevated the status of women when they were treated as property</li>
        <li><strong>To animals</strong> — He forbade the mistreatment of animals and taught that there is reward in showing kindness to any living creature</li>
        <li><strong>To children</strong> — He played with children, showed them affection, and warned against frightening them</li>
      </ul>

      <h3>His Character</h3>
      <p>Aisha (RA), his wife of many years, was asked to describe his character. She said simply: "His character was the Quran." He was the living embodiment of divine guidance.</p>

      <p>The Prophet ﷺ said: "I was sent to perfect good character." His life demonstrated that faith and excellent character are inseparable in Islam.</p>

      <h3>His Legacy</h3>
      <p>Within 23 years, the Prophet ﷺ transformed Arabia from a society of tribal warfare, idol worship, and injustice into a community of faith, brotherhood, and civilization. His message then spread across the world and continues to guide over 1.8 billion people today — making him, by any objective measure, the most impactful human being in history.</p>
    `,
  },

  {
    slug: "message-of-prophet-muhammad",
    category: "About Muhammad",
    icon: "📜",
    title: "The Message of Prophet Muhammad ﷺ",
    desc: "The core message the Prophet brought — Tawheed, justice, equality, and mercy for all mankind.",
    content: `
      <p>The message of Prophet Muhammad ﷺ can be summarized in one word: <strong>Tawheed</strong> — the absolute oneness of God. He called people away from idol worship, tribal arrogance, and injustice, and toward the worship of the One Creator who made all human beings equal.</p>

      <h3>The Message of Monotheism</h3>
      <p>The Prophet ﷺ began his mission by calling the people of Mecca to abandon their idols and worship Allah alone. This was a radical and revolutionary call in a society that had over 360 idols placed in and around the Kaaba.</p>

      <blockquote>"Say: I am only a man like you, to whom has been revealed that your god is one God. So whoever hopes for the meeting with his Lord — let him do righteous work and not associate in the worship of his Lord anyone." [18:110]</blockquote>

      <h3>A Social Revolution</h3>
      <p>The Prophet's ﷺ message was not only theological — it was a comprehensive social revolution:</p>

      <ul>
        <li><strong>Equality of all humans</strong> — He declared in his final sermon: "An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab; a white person has no superiority over a black person, nor a black person over a white person — except through piety and good deeds."</li>
        <li><strong>Rights of women</strong> — He established legal rights for women in marriage, divorce, inheritance, and property ownership</li>
        <li><strong>Protection of the vulnerable</strong> — He established rights for orphans, the poor, slaves, and prisoners of war</li>
        <li><strong>Abolition of exploitation</strong> — He regulated commerce, prohibited usury (riba), and established a system of mandatory charity (Zakat)</li>
      </ul>

      <h3>A Continuation of All Prophets</h3>
      <p>The Prophet ﷺ always emphasized that his message was not new — it was the same message brought by all the prophets before him:</p>

      <blockquote>"Say: We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims submitted to Him." [3:84]</blockquote>

      <h3>Universal and Final</h3>
      <p>Unlike previous prophets who were sent to specific peoples and times, the Prophet Muhammad ﷺ was sent to all of humanity for all time:</p>

      <blockquote>"And We have not sent you except comprehensively to mankind as a bringer of good tidings and a warner. But most of the people do not know." [34:28]</blockquote>

      <p>His message remains preserved in the Quran — unchanged, unaltered, and accessible to every human being on earth today.</p>
    `,
  },

  {
    slug: "non-muslim-scholars-on-muhammad",
    category: "About Muhammad",
    icon: "📖",
    title: "What Non-Muslim Scholars Said About Prophet Muhammad ﷺ",
    desc: "Historians, philosophers, and thinkers worldwide have recognized the extraordinary greatness of the Prophet.",
    content: `
      <p>Throughout history, countless non-Muslim scholars, historians, philosophers, and leaders have studied the life of Prophet Muhammad ﷺ and acknowledged his extraordinary impact on humanity. Their observations, made from outside the faith, carry a special weight of objectivity.</p>

      <h3>George Bernard Shaw</h3>
      <p>"I have always held the religion of Muhammad in high estimation because of its wonderful vitality. It is the only religion which appears to me to possess that assimilating capacity to the changing phase of existence which can make itself appeal to every age. I have studied him — the wonderful man — and in my opinion far from being an anti-Christ, he must be called the Savior of Humanity. I believe that if a man like him were to assume the dictatorship of the modern world, he would succeed in solving its problems in a way that would bring it the much needed peace and happiness." — The Genuine Islam, Vol. 1, No. 8, 1936</p>

      <h3>Mahatma Gandhi</h3>
      <p>"I wanted to know the best of the life of one who holds today an undisputed sway over the hearts of millions of mankind. I became more than ever convinced that it was not the sword that won a place for Islam in those days in the scheme of life. It was the rigid simplicity, the utter self-effacement of the Prophet, the scrupulous regard for pledges, his intense devotion to his friends and followers, his intrepidity, his fearlessness, his absolute trust in God and in his own mission. These and not the sword carried everything before them and surmounted every obstacle." — Young India, 1924</p>

      <h3>Thomas Carlyle</h3>
      <p>"How one man single-handedly, could weld warring tribes and wandering Bedouins into a most powerful and civilized nation in less than two decades. A silent great soul, one of that who cannot but be earnest. He was to kindle the world; the world's Maker had ordered so." — Heroes and Hero Worship, 1840</p>

      <h3>Annie Besant</h3>
      <p>"It is impossible for anyone who studies the life and character of the great Prophet of Arabia, who knows how he taught and how he lived, to feel anything but reverence for that mighty Prophet, one of the great messengers of the Supreme. And although in what I put to you I shall say many things which may be familiar to many, yet I myself feel whenever I re-read them, a new way of admiration, a new sense of reverence for that mighty Arabian teacher." — The Life and Teachings of Muhammad, 1932</p>

      <h3>Edward Gibbon</h3>
      <p>"The greatest success of Mohammad's life was effected by sheer moral force without the stroke of a sword." — History of the Saracen Empire, London, 1870</p>

      <h3>James Michener</h3>
      <p>"Muhammad, the inspired man who founded Islam, was born about A.D. 570 into an Arabian tribe that worshipped idols. Orphaned at birth, he was always particularly solicitous of the poor and needy, the widow and the orphan, the slave and the downtrodden. At twenty he was already a successful businessman, and soon married a wealthy widow. But he was not a man to rest on worldly success. Deep within him was a religious instinct that led him often to a cave in the hills for meditation and prayer." — Reader's Digest, May 1955</p>
    `,
  },

  {
    slug: "most-influential-person-michael-hart",
    category: "About Muhammad",
    icon: "🏆",
    title: "Most Influential Person in History — Michael H. Hart",
    desc: "A non-Muslim historian ranked Prophet Muhammad ﷺ as the most influential person in all of human history.",
    content: `
      <p>In his groundbreaking 1978 book <strong>"The 100: A Ranking of the Most Influential Persons in History"</strong>, non-Muslim astrophysicist and historian Michael H. Hart ranked Prophet Muhammad ﷺ as the single most influential person in all of human history — above Jesus, Isaac Newton, Buddha, Confucius, and all others.</p>

      <h3>Hart's Own Words</h3>
      <p>Hart wrote in the introduction to his ranking of Muhammad ﷺ:</p>

      <blockquote>"My choice of Muhammad to lead the list of the world's most influential persons may surprise some readers and may be questioned by others, but he was the only man in history who was supremely successful on both the religious and secular levels."</blockquote>

      <p>He further explained:</p>

      <blockquote>"Of humble origins, Muhammad founded and promulgated one of the world's great religions, and became an immensely effective political leader. Today, thirteen centuries after his death, his influence is still powerful and pervasive."</blockquote>

      <h3>Why Muhammad ﷺ Above All Others?</h3>
      <p>Hart's analysis was based purely on historical and sociological impact, not religious conviction. He highlighted several key factors:</p>

      <ul>
        <li>Muhammad ﷺ was both a religious and political leader who personally established the laws and practices still followed by over a billion people today</li>
        <li>Unlike Jesus, whose religious and political influence was shaped significantly by later followers like Paul, Muhammad ﷺ directly established both the religious principles and the political framework of Islamic civilization</li>
        <li>The speed and scale of Islam's spread — from a single individual in Mecca to a civilization spanning three continents within a century — is unparalleled in human history</li>
        <li>His influence continues actively across religious, legal, political, and cultural domains to this day</li>
      </ul>

      <h3>The Ranking</h3>
      <p>For reference, Hart's top 10 most influential persons in history were:</p>
      <ol>
        <li>Muhammad ﷺ</li>
        <li>Isaac Newton</li>
        <li>Jesus Christ</li>
        <li>Buddha</li>
        <li>Confucius</li>
        <li>St. Paul</li>
        <li>Ts'ai Lun (inventor of paper)</li>
        <li>Johann Gutenberg</li>
        <li>Christopher Columbus</li>
        <li>Albert Einstein</li>
      </ol>

      <p>This acknowledgment from a non-Muslim scholar, based entirely on objective historical analysis, demonstrates that the Prophet's ﷺ impact on humanity transcends religious boundaries and stands as an undeniable historical reality.</p>
    `,
  },

  // ── ABOUT JESUS ───────────────────────────────────────────────────
  {
    slug: "who-was-jesus",
    category: "About Jesus",
    icon: "✝️",
    title: "Who was Jesus? The Islamic Perspective",
    desc: "Muslims love and respect Jesus as one of the greatest prophets — but not as the son of God.",
    content: `
      <p>Muslims have great love and deep respect for Jesus (known in Arabic as Isa ﷺ). He is considered one of the greatest prophets in Islam and is mentioned more times in the Quran than Prophet Muhammad ﷺ himself. The mother of Jesus, Mary (Maryam), is so highly honored that an entire chapter of the Quran — Surah Maryam (Chapter 19) — is named after her. She is the only woman mentioned by name in the entire Quran.</p>

      <h3>What Muslims Believe About Jesus</h3>
      <ul>
        <li>Jesus was a human being — a great prophet and messenger of Allah</li>
        <li>He was born miraculously to the Virgin Mary, without a father, by the command of Allah</li>
        <li>He performed miracles by the permission of Allah — healing the blind, curing leprosy, and raising the dead</li>
        <li>He brought the Gospel (Injeel) as a guide for the Children of Israel</li>
        <li>He was not crucified — Allah raised him up before his enemies could harm him</li>
        <li>He will return before the Day of Judgment</li>
      </ul>

      <blockquote>"The Messiah, Jesus the son of Mary, was but a messenger of Allah and His word which He directed to Mary and a soul from Him." [4:171]</blockquote>

      <h3>The Miraculous Birth</h3>
      <blockquote>"And mention, in the Book, Mary, when she withdrew from her family to a place toward the east. And she took, in seclusion from them, a screen. Then We sent to her Our Angel, and he represented himself to her as a well-proportioned man. She said, 'Indeed, I seek refuge in the Most Merciful from you, so if you should be fearing of Allah...' He said, 'I am only the messenger of your Lord to give you news of a pure son.' She said, 'How can I have a boy while no man has touched me and I have not been unchaste?' He said, 'Thus your Lord says: It is easy for Me, and We will make him a sign to the people and a mercy from Us. And it is a matter already decreed.'" [19:16-21]</blockquote>

      <h3>The Key Difference with Christianity</h3>
      <p>While Muslims honor Jesus deeply, the key theological difference is that Islam rejects the doctrine of the Trinity and the belief that Jesus is the son of God or God incarnate. The Quran addresses this directly:</p>

      <blockquote>"O People of the Scripture, do not commit excess in your religion or say about Allah except the truth. The Messiah, Jesus the son of Mary, was but a messenger of Allah and His word which He directed to Mary and a soul from Him. So believe in Allah and His messengers. And do not say 'Three'; desist — it is better for you. Indeed, Allah is but one God. Exalted is He above having a son." [4:171]</blockquote>

      <p>In Islam, Jesus himself never claimed to be God. He called people to worship the One God and followed the divine laws given to him. He was the Messiah — the anointed one — but not divine. His greatness lies in being one of the greatest human messengers ever sent by Allah.</p>
    `,
  },

  {
    slug: "how-jesus-people-knew-him",
    category: "About Jesus",
    icon: "👥",
    title: "How Did Jesus' People Know Him?",
    desc: "Historical evidence of how the contemporaries of Jesus understood his identity and mission.",
    content: `
      <p>One of the most important questions in understanding Jesus is: how did the people who lived with him, heard him, and followed him understand who he was? The historical evidence — including from the Bible itself — strongly suggests that his contemporaries understood him as a prophet of God, not as God incarnate.</p>

      <h3>Jesus Called a Prophet by His Contemporaries</h3>
      <p>The Bible records multiple instances where Jesus is referred to as a prophet:</p>

      <ul>
        <li>"When Jesus entered Jerusalem, the whole city was stirred and asked, 'Who is this?' The crowds answered, 'This is Jesus, the prophet from Nazareth in Galilee.'" [Matthew 21:10-11]</li>
        <li>"A great prophet has appeared among us." [Luke 7:16]</li>
        <li>The woman at the well said: "Sir, I can see that you are a prophet." [John 4:19]</li>
        <li>"Jesus of Nazareth... was a prophet, powerful in word and deed before God and all the people." [Luke 24:19]</li>
      </ul>

      <h3>Jesus Referred to Himself as a Prophet</h3>
      <p>Jesus himself used prophetic language about his own identity:</p>
      <ul>
        <li>"A prophet is not accepted in his hometown." [Luke 4:24]</li>
        <li>"I must press on today and tomorrow and the next day — for surely no prophet can die outside Jerusalem." [Luke 13:33]</li>
      </ul>

      <h3>Jesus Prayed to God</h3>
      <p>If Jesus were God, to whom was he praying? The Bible records Jesus in prayer to God throughout his life:</p>
      <ul>
        <li>"My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will." [Matthew 26:39]</li>
        <li>"Father, I thank you that you have heard me." [John 11:41]</li>
        <li>"My God, my God, why have you forsaken me?" [Matthew 27:46]</li>
      </ul>

      <h3>The Council of Nicaea — 325 CE</h3>
      <p>The formal doctrine of Jesus as God — the Trinity — was not officially established until the Council of Nicaea in 325 CE, approximately 300 years after Jesus. This council, convened by the Roman Emperor Constantine, voted on and formalized the doctrine of the Trinity.</p>

      <p>This means that for three centuries after Jesus, Christians debated his nature. The doctrine of his divinity was a later theological development — not the original understanding of his earliest followers, who knew him personally.</p>

      <p>Islam's position — that Jesus was a great prophet and messenger — is actually consistent with how his own people initially understood him during his lifetime.</p>
    `,
  },

  {
    slug: "god-and-jesus-quran-bible",
    category: "About Jesus",
    icon: "📔",
    title: "God and Jesus — According to the Quran, New and Old Testament",
    desc: "A comparative look at what the scriptures actually say about the nature of God and Jesus.",
    content: `
      <p>A careful, honest reading of the Quran, the New Testament, and the Old Testament reveals a consistent theme: God is absolutely One, and Jesus was His prophet and messenger — not God Himself. Let us look at what each scripture actually says.</p>

      <h3>The Old Testament — Pure Monotheism</h3>
      <blockquote>"Hear, O Israel: The Lord our God, the Lord is One." [Deuteronomy 6:4]</blockquote>
      <blockquote>"You shall have no other gods before Me." [Exodus 20:3]</blockquote>
      <blockquote>"I am the Lord, and there is no other; apart from me there is no God." [Isaiah 45:5]</blockquote>

      <h3>Jesus in the New Testament — A Prophet</h3>
      <p>Jesus affirmed the absolute oneness of God. When asked about the greatest commandment, Jesus replied:</p>
      <blockquote>"The most important one is this: Hear, O Israel: The Lord our God, the Lord is One. Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength." [Mark 12:29-30]</blockquote>

      <p>Jesus also made clear distinctions between himself and God:</p>
      <ul>
        <li>"My Father is greater than I." [John 14:28]</li>
        <li>"The Father is greater than all." [John 10:29]</li>
        <li>"I can of mine own self do nothing." [John 5:30]</li>
        <li>"Why do you call me good? No one is good except God alone." [Mark 10:18]</li>
      </ul>

      <h3>The Quran on Jesus</h3>
      <blockquote>"And when Allah will say: O Jesus, son of Mary, did you say to the people, 'Take me and my mother as deities besides Allah?' He will say, 'Exalted are You! It was not for me to say that to which I have no right. If I had said it, You would have known it. You know what is within myself, and I do not know what is within Yourself. Indeed, it is You who is Knower of the unseen.'" [5:116]</blockquote>

      <blockquote>"Indeed, the example of Jesus to Allah is like that of Adam. He created him from dust; then He said to him, 'Be,' and he was." [3:59]</blockquote>

      <h3>The Mission of Jesus</h3>
      <p>The Quran describes the mission Jesus was given:</p>
      <blockquote>"And We sent, following in their footsteps, Jesus the son of Mary, confirming that which came before him in the Torah; and We gave him the Gospel, in which was guidance and light and confirming that which preceded it of the Torah as guidance and instruction for the righteous." [5:46]</blockquote>

      <p>Jesus came to confirm the Torah of Moses and to bring the Gospel — not to establish a new theology of Trinity or divine incarnation. Both the Bible and the Quran, when read honestly, present Jesus as a great prophet devoted to the worship of the One God.</p>
    `,
  },

  // ── ABOUT THE QURAN ───────────────────────────────────────────────
  {
    slug: "who-wrote-the-quran",
    category: "About the Quran",
    icon: "📖",
    title: "Who Wrote the Quran?",
    desc: "The Quran is the word of Allah, revealed to Prophet Muhammad through the Angel Jibreel over 23 years.",
    content: `
      <p>Muslims believe with absolute certainty that the Quran is the direct word of Allah — revealed to Prophet Muhammad ﷺ through the Angel Jibreel (Gabriel) over a period of 23 years (610–632 CE). The Quran was not written by Muhammad ﷺ — a fact supported by the historical reality that he was illiterate and could neither read nor write before or during the revelation.</p>

      <blockquote>"And you did not recite before it any scripture, nor did you inscribe one with your right hand. Otherwise the falsifiers would have had cause for doubt." [29:48]</blockquote>

      <h3>The Process of Revelation</h3>
      <p>The revelation came to the Prophet ﷺ in different ways:</p>
      <ul>
        <li>Sometimes like the ringing of a bell — the most intense form, after which he would remember the words perfectly</li>
        <li>Sometimes the Angel Jibreel appeared in human form and conveyed the words directly</li>
        <li>Sometimes directly into the heart of the Prophet ﷺ</li>
      </ul>

      <p>Upon receiving each revelation, the Prophet ﷺ immediately recited it to his companions. Dozens of scribes wrote it down on whatever materials were available — palm leaves, stones, bones, and leather. Thousands of companions memorized it word for word during the Prophet's lifetime.</p>

      <h3>The Compilation of the Quran</h3>
      <p>After the Prophet's ﷺ death in 632 CE, his close companion Abu Bakr (the first Caliph) ordered the collection of all written portions of the Quran into a single book. This was done under the supervision of Zaid ibn Thabit, the chief scribe of the Prophet ﷺ.</p>

      <p>During the caliphate of Uthman (644–656 CE), standardized copies were made and distributed to the major cities of the Islamic world. These copies serve as the basis of every Quran in the world today.</p>

      <h3>The Challenge of the Quran</h3>
      <blockquote>"And if you are in doubt about what We have sent down upon Our Servant, then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful." [2:23]</blockquote>

      <p>This challenge — known as the Ijaz al-Quran (the Inimitability of the Quran) — has stood for over 1,400 years. Despite being addressed to the most eloquent speakers of the Arabic language, no one has ever produced anything remotely comparable to the Quran in literary beauty, depth, and internal consistency.</p>

      <h3>Evidence of Divine Authorship</h3>
      <ul>
        <li>The Prophet ﷺ was illiterate — he could not have authored such a literary masterpiece</li>
        <li>The Quran contains detailed scientific facts unknown at the time of revelation</li>
        <li>The Quran has remained unchanged for 1,400 years — preserved through both memorization and written records</li>
        <li>The literary quality of the Quran is universally acknowledged, even by non-Muslims, to be beyond human composition</li>
      </ul>
    `,
  },

  {
    slug: "preservation-of-quran",
    category: "About the Quran",
    icon: "🛡️",
    title: "Proof of the Preservation of the Quran",
    desc: "The Quran is the only religious scripture perfectly preserved in its original language for over 1,400 years.",
    content: `
      <p>The Quran is unique among the world's religious scriptures in that it has been perfectly preserved in its original Arabic language for over 1,400 years — unchanged and unaltered. This preservation was promised by Allah Himself:</p>

      <blockquote>"Indeed, it is We who sent down the Quran and indeed, We will be its guardian." [15:9]</blockquote>

      <h3>The Phenomenon of Memorization</h3>
      <p>From the very beginning of the revelation, Muslims memorized the Quran. The Prophet ﷺ encouraged memorization and gave special honor to those who memorized the entire text. Today, there are estimated to be over 10 million Muslims worldwide — known as Huffaz (singular: Hafiz) — who have memorized the entire Quran from beginning to end, word for word.</p>

      <p>This means that even if every written copy of the Quran were destroyed, it could be perfectly reconstructed from the memories of millions of people across dozens of countries. No other text in human history has been preserved in this way.</p>

      <h3>Manuscript Evidence</h3>
      <p>The oldest existing Quran manuscripts confirm that the text has not changed:</p>
      <ul>
        <li><strong>The Birmingham Quran</strong> — carbon dated to 568-645 CE, it is virtually identical to the Quran read today. The University of Birmingham confirmed it is one of the oldest Quran manuscripts in the world.</li>
        <li><strong>The Sana'a Manuscripts</strong> — discovered in Yemen in 1972, these manuscripts date to within decades of the Prophet's ﷺ lifetime and are consistent with the current Quran.</li>
        <li><strong>The Topkapi Manuscript</strong> — housed in Istanbul, Turkey, one of the oldest complete Quranic manuscripts, dated to the early Islamic period.</li>
      </ul>

      <h3>One Text, One World</h3>
      <p>Unlike the Bible, which exists in hundreds of different versions and translations that often contradict each other, there is only ONE authoritative Arabic text of the Quran. A Quran printed in Indonesia is identical to one printed in Morocco, Saudi Arabia, or the United States. The text is exactly the same — every word, every letter.</p>

      <h3>The Contrast with Other Scriptures</h3>
      <p>The preservation of the Quran stands in stark contrast to other scriptures:</p>
      <ul>
        <li>The original Torah (in Hebrew) has been lost and exists today only in translations and later manuscripts</li>
        <li>The original Gospel of Jesus has been lost — what exists today are accounts written by others decades after Jesus</li>
        <li>The Bible has thousands of manuscript variants and hundreds of different modern versions</li>
      </ul>

      <p>The Quran alone stands as the living proof of Allah's promise — preserved, memorized, and recited exactly as it was revealed, 1,400 years ago.</p>
    `,
  },

  {
    slug: "why-gods-book-has-no-errors",
    category: "About the Quran",
    icon: "🌿",
    title: "Why God's Book Cannot Contain Errors",
    desc: "The Quran's internal consistency, scientific accuracy, and literary perfection are evidence of divine authorship.",
    content: `
      <p>If the Quran is truly the word of an All-Knowing, All-Wise God, it should be free from errors, contradictions, and inconsistencies — and that is precisely what we find when we examine it carefully.</p>

      <blockquote>"Then do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction." [4:82]</blockquote>

      <h3>No Contradictions</h3>
      <p>The Quran was revealed over 23 years, in different circumstances, addressing different situations and questions. Despite this, it is remarkably consistent throughout — theologically, historically, and in its ethical teachings. Scholars and critics who have searched for contradictions in the Quran have consistently failed to find genuine ones.</p>

      <h3>Scientific Accuracy</h3>
      <p>The Quran contains descriptions of natural phenomena that were not scientifically understood or discovered until centuries after the revelation:</p>

      <ul>
        <li><strong>Expansion of the Universe</strong> — "And the heaven We constructed with strength, and indeed, We are its expanders." [51:47] — The expanding universe was not discovered until Edwin Hubble's work in 1929.</li>
        <li><strong>Embryonic Development</strong> — "Then We made the sperm-drop into a clinging clot, and We made the clot into a lump of flesh, and We made from the lump bones, and We clothed the bones with flesh; then We developed him into another creation." [23:14] — This precise description of embryonic stages was confirmed only with modern microscopy.</li>
        <li><strong>The Barrier Between Seas</strong> — "He released the two seas, meeting each other. Between them is a barrier they do not transgress." [55:19-20] — Modern oceanography has confirmed that different seas can meet with distinct temperature, salinity, and density differences without fully mixing.</li>
        <li><strong>The Role of Mountains</strong> — "Have We not made the earth a resting place? And the mountains as stakes?" [78:6-7] — Geology has confirmed that mountains have deep roots that stabilize the earth's crust.</li>
        <li><strong>The Protective Sky</strong> — "And We made the sky a protected ceiling." [21:32] — The Earth's atmosphere protects life from cosmic radiation and meteorites.</li>
      </ul>

      <h3>Historical Accuracy</h3>
      <p>The Quran's accounts of ancient history — the stories of Pharaoh, of the people of 'Ad and Thamud, of the Roman and Persian empires — have consistently been confirmed by modern archaeology. The Quran predicted that the body of Pharaoh would be preserved as a sign for future generations [10:92] — and today, the mummified body of what many scholars believe to be the Pharaoh of Moses' time is displayed in the Cairo Museum.</p>

      <h3>Literary Perfection</h3>
      <p>The Quran's literary quality is universally acknowledged. Even non-Muslim Arabic scholars recognize it as the pinnacle of the Arabic language. Thomas Carlyle acknowledged "a confused coil of crude, incondite..." was his initial impression, but later admitted its power and authenticity. The Quran's rhyme, rhythm, and depth of meaning in Arabic is simply inimitable — as Allah Himself challenged.</p>

      <p>A book authored by a human being — especially an illiterate one — in the 7th century CE could not possibly contain accurate descriptions of embryology, cosmology, oceanography, and geology. The only rational explanation is divine authorship.</p>
    `,
  },

  // ── BECOMING MUSLIM ───────────────────────────────────────────────
  {
    slug: "how-to-convert-to-islam",
    category: "Becoming Muslim",
    icon: "🌙",
    title: "How to Convert to Islam and Become a Muslim",
    desc: "Becoming a Muslim is simple — it requires only sincerity of heart and the declaration of faith.",
    content: `
      <p>Becoming a Muslim is one of the simplest and most profound acts a person can perform. It requires no ceremony, no baptism, no payment, and no intermediary. All that is needed is a sincere belief in the heart and the verbal declaration of the Shahada — the testimony of faith.</p>

      <h3>The Shahada — Declaration of Faith</h3>
      <blockquote>"Ash-hadu an la ilaha ill-Allah, wa ash-hadu anna Muhammadan rasul-ullah."<br/>"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."</blockquote>

      <p>When a person sincerely says this with genuine belief in their heart, they become a Muslim. It is that simple. No authority needs to be present, though having witnesses at a masjid makes the experience more meaningful and connects you to the community.</p>

      <h3>What Does the Shahada Mean?</h3>
      <p>The Shahada has two parts:</p>
      <ul>
        <li><strong>"There is no god but Allah"</strong> — This affirms that only the One True God deserves worship. You reject all false gods, idols, and the worship of anything other than Allah.</li>
        <li><strong>"Muhammad is the messenger of Allah"</strong> — This affirms your belief in the Prophet Muhammad ﷺ as the final messenger, and your commitment to follow his guidance (Sunnah) along with the Quran.</li>
      </ul>

      <h3>What Happens When You Become a Muslim?</h3>
      <ul>
        <li><strong>All previous sins are completely forgiven</strong> — The Prophet ﷺ said: "Islam wipes out whatever came before it." You begin with an entirely clean slate.</li>
        <li><strong>You become part of a global family</strong> — 1.8 billion Muslims around the world become your brothers and sisters in faith</li>
        <li><strong>You gain a direct relationship with Allah</strong> — No intermediaries, no priests. You can speak to your Creator directly at any time</li>
        <li><strong>Your good deeds are multiplied</strong> — Every good action you perform is recorded and rewarded</li>
      </ul>

      <h3>What to Do After the Shahada</h3>
      <p>After taking your Shahada, here are the next steps:</p>
      <ul>
        <li>Take a ritual purification bath (Ghusl) — a full body wash symbolizing spiritual cleanliness</li>
        <li>Learn the five daily prayers (Salah) — the direct connection to Allah</li>
        <li>Read a translation of the Quran to understand Allah's message</li>
        <li>Connect with your local masjid for community, support, and guidance</li>
        <li>Learn gradually — Islam is a lifelong journey, not a destination</li>
      </ul>

      <h3>We Are Here for You</h3>
      <p>If you are interested in taking your Shahada or have any questions about Islam, please contact Masjid Hamza. We have brothers and sisters ready to support you, answer your questions, and walk alongside you every step of the way. You are not alone on this journey — the entire community of Islam welcomes you with open arms.</p>

      <p>The Prophet ﷺ said: "The believer to another believer is like a building — each part strengthens the other." We look forward to being your support and your family in faith.</p>
    `,
  },

  {
    slug: "benefits-of-becoming-muslim",
    category: "Becoming Muslim",
    icon: "💎",
    title: "Benefits of Becoming a Muslim",
    desc: "Islam offers peace of mind, purpose, community, forgiveness, and a direct connection to the Creator.",
    content: `
      <p>Embracing Islam brings profound benefits — both in this life and in the eternal life to come. Here are some of the most significant gifts that come with accepting Islam:</p>

      <h3>1. Complete Forgiveness of All Past Sins</h3>
      <p>This is perhaps the most extraordinary gift. When a person sincerely accepts Islam, every single sin of their past life — no matter how serious — is completely and unconditionally forgiven by Allah. The Prophet ﷺ said: "Islam wipes out whatever came before it." [Muslim]</p>

      <p>This is not just a reduction in sins or a partial forgiveness — it is a total spiritual rebirth. You begin your new life as a Muslim with an absolutely clean slate, as pure as a newborn child.</p>

      <h3>2. Direct Connection with the Creator</h3>
      <p>In Islam, there are no intermediaries between you and Allah. No priests, no confessionals, no saints to go through. You can speak to the Creator of the universe directly, in your own language, at any moment of the day or night.</p>

      <blockquote>"And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." [2:186]</blockquote>

      <h3>3. True Peace of Mind</h3>
      <blockquote>"Verily, in the remembrance of Allah do hearts find rest." [13:28]</blockquote>

      <p>Islam provides answers to the deepest questions of human existence — Who am I? Why am I here? What happens when I die? This clarity brings a profound and lasting inner peace that no amount of wealth or worldly success can provide.</p>

      <h3>4. A Global Community — the Ummah</h3>
      <p>Muslims worldwide are united as one family — the Ummah. Regardless of race, nationality, language, or social status, every Muslim is your brother or sister in faith. When you travel to any Muslim country or city, you will find a community ready to welcome you. The Prophet ﷺ described the believers as "one body — if one part suffers, the whole body responds with fever and sleeplessness."</p>

      <h3>5. Purpose and Direction</h3>
      <p>Islam gives life clear purpose and direction. Every action — from the grandest to the most mundane — becomes meaningful when done with the intention of pleasing Allah. Work becomes worship. Feeding your family becomes worship. Smiling at someone becomes worship.</p>

      <h3>6. A Complete Way of Life</h3>
      <p>Islam is not just a religion confined to weekends or rituals. It is a comprehensive way of life that provides guidance for every aspect of human existence — relationships, business, health, governance, worship, and personal development. A Muslim is never left without guidance.</p>

      <h3>7. Eternal Reward — Jannah (Paradise)</h3>
      <p>Most significantly, Islam is the path to Jannah — Paradise. Allah describes it as containing what no eye has seen, no ear has heard, and no human heart has ever imagined. The believer who strives sincerely in this life will find in the next life an eternal reward of happiness, beauty, and closeness to Allah that makes every difficulty of this world seem insignificant.</p>

      <blockquote>"And give good tidings to those who believe and do righteous deeds that they will have gardens beneath which rivers flow." [2:25]</blockquote>
    `,
  },

  // ── ANSWERS TO RACISM & JUSTICE ──────────────────────────────────
  {
    slug: "malcolm-x-letter-from-hajj",
    category: "Answers to Racism & Justice",
    icon: "✊",
    title: "Malcolm X's Letter from Hajj",
    desc: "The transformative letter Malcolm X wrote from Mecca in 1964 — a testimony to Islam's power to unite humanity.",
    content: `
      <p>In April 1964, Malcolm X (El-Hajj Malik El-Shabazz) performed the Hajj pilgrimage to Mecca. What he witnessed there completely transformed his understanding of race and humanity. He wrote this historic letter to his assistants in Harlem:</p>

      <blockquote>"Never have I witnessed such sincere hospitality and overwhelming spirit of true brotherhood as is practiced by people of all colors and races here in this ancient Holy Land. For the past week, I have been utterly speechless and spellbound by the graciousness I see displayed all around me by people of all colors.</blockquote>

      <blockquote>"There were tens of thousands of pilgrims, from all over the world. They were of all colors, from blue-eyed blonds to black-skinned Africans. But we were all participating in the same ritual, displaying a spirit of unity and brotherhood that my experiences in America had led me to believe never could exist between the white and non-white.</blockquote>

      <blockquote>"America needs to understand Islam, because this is the one religion that erases from its society the race problem. Throughout my travels in the Muslim world, I have met, talked to, and even eaten with people who in America would have been considered white — but the white attitude was removed from their minds by the religion of Islam.</blockquote>

      <blockquote>"I have never before seen sincere and true brotherhood practiced by all colors together, irrespective of their color. You may be shocked by these words coming from me. But on this pilgrimage, what I have seen and experienced has forced me to rearrange much of my thought-patterns previously held.</blockquote>

      <blockquote>"During the past eleven days here in the Muslim world, I have eaten from the same plate, drunk from the same glass, and slept in the same bed while praying to the same God — with fellow Muslims whose eyes were the bluest of blue, whose hair was the blondest of blond, and whose skin was the whitest of white. And in the words and deeds of the white Muslims, I felt the same sincerity that I felt among the black African Muslims of Nigeria, Sudan and Ghana.</blockquote>

      <blockquote>"We were truly all the same brothers, because our belief in one God had removed the white from their minds, the white from their behavior, and the white from their attitude. I could see from this that perhaps if white Americans could accept the Oneness of God, then perhaps, too, they could accept in reality the Oneness of Man."</blockquote>

      <h3>The Transformation</h3>
      <p>Malcolm X returned from Hajj a changed man. He abandoned his earlier position that all white people were inherently evil, and instead embraced the Islamic teaching of human equality regardless of race. He took the name El-Hajj Malik El-Shabazz and dedicated the remaining months of his life to spreading a message of unity.</p>

      <h3>Islam's Answer to Racism</h3>
      <p>The experience of Hajj — where millions of people of every race, nationality, and language worship together as equals — is Islam's most powerful practical demonstration of its answer to racism. On the plains of Arafat, there are no VIP sections, no racial hierarchies, no class distinctions. Everyone wears the same simple white garments and stands before Allah as equals.</p>

      <p>The Prophet ﷺ declared in his final sermon: "An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab; a white person has no superiority over a black person, nor a black person over a white person — except through piety and good deeds." This was declared over 1,400 years ago.</p>
    `,
  },

  {
    slug: "prophets-last-sermon",
    category: "Answers to Racism & Justice",
    icon: "📣",
    title: "The Prophet Muhammad's Last Sermon",
    desc: "The farewell sermon of the Prophet ﷺ — a timeless declaration of human equality, justice, and rights.",
    content: `
      <p>On the 9th of Dhul Hijjah, 10 AH (632 CE), Prophet Muhammad ﷺ delivered his farewell sermon (Khutbat al-Wada) to over 100,000 companions on the plains of Arafat during his final pilgrimage. It is one of the most comprehensive declarations of human rights ever made — over 1,400 years before the United Nations Universal Declaration of Human Rights.</p>

      <h3>The Sermon</h3>

      <p><strong>On the sanctity of life and property:</strong></p>
      <blockquote>"O People! Your lives and your property shall be inviolate until you meet your Lord. The safety of your lives and of your property shall be as inviolate as this holy day and holy month."</blockquote>

      <p><strong>On human equality and racism:</strong></p>
      <blockquote>"O People! Your Lord is One and your father is one. You are all children of Adam, and Adam was created from dust. An Arab is not superior to a non-Arab, nor is a non-Arab superior to an Arab; a white person is not superior to a black person, nor is a black person superior to a white person — except through piety and good deeds. Have I conveyed the message? O Allah, be my witness."</blockquote>

      <p><strong>On the rights of women:</strong></p>
      <blockquote>"O People! It is true that you have certain rights over your women, but they also have rights over you. Remember that you have taken them as your wives only under Allah's trust and with His permission. Treat your women well and be kind to them, for they are your partners and committed helpers."</blockquote>

      <p><strong>On brotherhood:</strong></p>
      <blockquote>"Know that every Muslim is a Muslim's brother, and that the Muslims are brethren. It is only lawful to take from a brother what he gives you willingly, so wrong not yourselves."</blockquote>

      <p><strong>On the abolition of usury and old injustices:</strong></p>
      <blockquote>"God has forbidden you to take usury; therefore all interest obligation shall henceforth be waived. Your capital, however, is yours to keep. You will neither inflict nor suffer inequity."</blockquote>

      <p><strong>On the two great sources of guidance:</strong></p>
      <blockquote>"I have left among you that which if you hold fast to it, you shall not go astray: the Book of Allah and the Sunnah of His Prophet."</blockquote>

      <p><strong>The final question:</strong></p>
      <blockquote>"O People! Have I faithfully delivered unto you my message?" A hundred thousand voices replied: "O Allah! Yes!" The Prophet ﷺ raised his forefinger toward the sky and then pointed it at the people: "O Allah, bear witness."</blockquote>

      <h3>The Significance</h3>
      <p>This sermon, delivered over 1,400 years ago, established:</p>
      <ul>
        <li>The sanctity and inviolability of human life</li>
        <li>The absolute equality of all human beings regardless of race</li>
        <li>The rights of women as full human beings deserving respect</li>
        <li>The brotherhood of all believers</li>
        <li>The prohibition of economic exploitation</li>
        <li>The supremacy of divine guidance (Quran and Sunnah)</li>
      </ul>

      <p>These principles formed the foundation of Islamic civilization and continue to guide the lives of over 1.8 billion Muslims today. They were not ideals left unimplemented — they were the actual laws and practices of the first Muslim community under the Prophet's ﷺ leadership.</p>
    `,
  },
];
