export interface IslamTopic {
  slug: string;
  category: string;
  icon: string;
  title: string;
  desc: string;
  content: string;
}

export const islamTopics: IslamTopic[] = [
  // ABOUT ISLAM
  {
    slug: "purpose-of-creation",
    category: "About Islam",
    icon: "🌌",
    title: "What is the purpose of our creation?",
    desc: "Non-believers are unable to provide any convincing reason for the existence of this universe or of human life.",
    content: `<p>Non-believers are unable to provide any convincing reason for the existence of this universe or of human life. People who believe there is a Creator assume that creation occurred by His will. But in a world where everything is shown to have a purpose, it is natural for a human being to wonder about the purpose of his own creation.</p>
    <p>The Qur'an informs us that He did just that. It says God created us for a test here on earth, conveying His words:</p>
    <blockquote>"Then did you think that We created you uselessly and that to Us you would not be returned?" [23:115-116]</blockquote>
    <p>God created man to test him with certain responsibilities [18:7, 67:2, 76:2]. He did not intend life on this earth to necessarily be comfortable or satisfying but merely a trial of limited duration, the punishment and rewards of which will be due in the Hereafter.</p>
    <p>Man was given free will and the ability to either obey or disobey. This life is very meaningful and purposeful to the believing Muslim because he realizes that it will determine his outcome and permanent position in the next life.</p>
    <blockquote>"I did not create the jinn and mankind except to worship Me." [51:56]</blockquote>`,
  },
  {
    slug: "non-muslim-scholars-on-islam",
    category: "About Islam",
    icon: "📚",
    title: "What Do Non-Muslim Scholars Say About Islam?",
    desc: "The Islam revealed to Muhammad (PBUH) is the continuation and culmination of all preceding revealed religions.",
    content: `<p>Many non-Muslim scholars and thinkers throughout history have acknowledged the profound impact and truth of Islam. Their observations provide an outside perspective on the religion's message and its effects on humanity.</p>
    <p><strong>George Bernard Shaw</strong> wrote: "I have always held the religion of Muhammad in high estimation because of its wonderful vitality. It is the only religion which appears to me to possess that assimilating capacity to the changing phase of existence which can make itself appeal to every age."</p>
    <p><strong>Michael H. Hart</strong>, in his book "The 100: A Ranking of the Most Influential Persons in History," ranked Prophet Muhammad (PBUH) as the most influential person in human history, citing his unparalleled religious and secular influence.</p>
    <p><strong>Mahatma Gandhi</strong> said: "I wanted to know the best of the life of one who holds today an undisputed sway over the hearts of millions of mankind... I became more than ever convinced that it was not the sword that won a place for Islam in those days in the scheme of life. It was the rigid simplicity, the utter self-effacement of the Prophet, the scrupulous regard for pledges, his intense devotion to his friends and followers, his intrepidity, his fearlessness, his absolute trust in God and in his own mission."</p>`,
  },
  {
    slug: "concept-of-god-in-islam",
    category: "About Islam",
    icon: "☪️",
    title: "The Concept of God in Islam",
    desc: "Islam's concept of God is pure monotheism — Allah is One, Unique, and without partners or equals.",
    content: `<p>The Islamic concept of God (Allah) is based on pure, unadulterated monotheism. Unlike other religions that may portray God in human form or as part of a trinity, Islam maintains that Allah is absolutely One, unique, and incomparable.</p>
    <p>The Quran states: <blockquote>"Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent." [112:1-4]</blockquote></p>
    <p>Allah has no partners, no children, and no equals. He is the Creator of everything that exists and is independent of His creation. He is All-Knowing, All-Powerful, and All-Merciful.</p>
    <p>Islam rejects any form of anthropomorphism — attributing human characteristics to God. Allah transcends all human limitations and cannot be fully comprehended by the human mind. Yet He is closer to us than our own jugular vein [50:16].</p>
    <p>The 99 Names of Allah (Asma ul-Husna) describe His attributes: Ar-Rahman (The Most Merciful), Al-Khaliq (The Creator), Al-Hakeem (The All-Wise), Al-Wadud (The Most Loving), and many more.</p>`,
  },
  {
    slug: "status-of-women-in-islam",
    category: "About Islam",
    icon: "🌸",
    title: "Status of Women in Islam",
    desc: "Islam elevated the status of women 1400 years ago, granting them rights that the Western world only recognized centuries later.",
    content: `<p>Islam elevated the status of women over 1,400 years ago — long before the modern women's rights movement. In pre-Islamic Arabia, women were treated as property and had no legal rights. Islam changed this completely.</p>
    <p><strong>Spiritual Equality:</strong> The Quran explicitly states that men and women are equal in the sight of Allah: "Indeed, the Muslim men and Muslim women, the believing men and believing women... Allah has prepared for them forgiveness and a great reward." [33:35]</p>
    <p><strong>Right to Education:</strong> The Prophet Muhammad ﷺ said: "Seeking knowledge is an obligation upon every Muslim." This applies equally to men and women.</p>
    <p><strong>Financial Rights:</strong> Islam gave women the right to own property, inherit, conduct business, and keep their own earnings — rights that women in the West only gained in the 19th and 20th centuries.</p>
    <p><strong>Marriage Rights:</strong> A woman's consent is required for marriage. She has the right to set conditions in her marriage contract and to seek divorce if needed.</p>
    <p><strong>The Hijab:</strong> Rather than being oppressive, Muslim women view the hijab as liberating — freeing them from being judged by their appearance and affirming their identity as believers.</p>`,
  },

  // COMMON MISCONCEPTIONS
  {
    slug: "islam-science-technology",
    category: "Common Misconceptions",
    icon: "🔬",
    title: "Islam's View on Education, Science & Technology",
    desc: "Islam strongly encourages the pursuit of knowledge — the first word revealed was 'Read'.",
    content: `<p>One of the greatest misconceptions about Islam is that it is somehow incompatible with science and modern education. In fact, the very first word revealed in the Quran was <strong>"Iqra"</strong> — meaning "Read" or "Recite." Islam has always championed the pursuit of knowledge.</p>
    <p>The Prophet Muhammad ﷺ said: "Seeking knowledge is an obligation upon every Muslim" and "Seek knowledge even if you have to go to China." These statements reflect Islam's universal and boundless encouragement of education.</p>
    <p><strong>The Islamic Golden Age</strong> (8th-13th centuries) produced some of history's greatest scientists, mathematicians, and philosophers. Muslim scholars preserved Greek knowledge and made their own revolutionary contributions:</p>
    <ul>
      <li><strong>Al-Khwarizmi</strong> — Invented algebra (the word "algebra" comes from his work "Al-Jabr")</li>
      <li><strong>Ibn Sina (Avicenna)</strong> — His Canon of Medicine was used in European universities for 600 years</li>
      <li><strong>Ibn al-Haytham</strong> — Father of modern optics and the scientific method</li>
      <li><strong>Al-Biruni</strong> — Pioneer in anthropology, geodesy, and astronomy</li>
    </ul>
    <p>The Quran itself encourages observation of the natural world: "Do they not look at the sky above them, how We have built it and adorned it?" [50:6]. Far from opposing science, Islam views the study of creation as a path to recognizing the Creator.</p>`,
  },
  {
    slug: "hijab-head-covers",
    category: "Common Misconceptions",
    icon: "🧕",
    title: "Head Covers (Hijab)",
    desc: "Understanding the Islamic headscarf — its purpose, meaning, and significance to Muslim women.",
    content: `<p>The hijab (Islamic headscarf) is one of the most misunderstood aspects of Islam in the Western world. Many assume it is a symbol of oppression, but the reality is quite different — most Muslim women who wear hijab do so as an act of faith, dignity, and identity.</p>
    <p><strong>What is the Hijab?</strong> The word "hijab" in Arabic means "covering" or "barrier." In Islamic practice, it refers to the modest dress code for Muslim women, which typically includes covering the hair and body, while leaving the face and hands uncovered.</p>
    <p><strong>Why do Muslim women wear Hijab?</strong> The Quran instructs believing women to dress modestly: "And tell the believing women to reduce some of their vision and guard their private parts and not expose their adornment except that which appears thereof..." [24:31]</p>
    <p><strong>Liberation, not oppression:</strong> Many Muslim women describe the hijab as liberating — it shifts the focus from physical appearance to character and intellect. It is a declaration that a woman's worth is not defined by her looks.</p>
    <p><strong>Choice and Faith:</strong> In Islam, wearing the hijab is an act of obedience to Allah and a source of spiritual reward. It is an expression of a Muslim woman's faith and identity, not a symbol of male control.</p>`,
  },
  {
    slug: "kaaba-not-idol-worship",
    category: "Common Misconceptions",
    icon: "🕋",
    title: "If Islam opposes idol worship, why do Muslims pray toward the Kaaba?",
    desc: "Muslims don't worship the Kaaba — they use it as a unified direction for prayer, not as an object of worship.",
    content: `<p>This is one of the most common questions about Islam, and it has a clear answer: Muslims do not worship the Kaaba. The Kaaba is simply a focal point for prayer — a direction that unifies all Muslims around the world.</p>
    <p><strong>What is the Kaaba?</strong> The Kaaba is a cube-shaped structure in Mecca, Saudi Arabia. According to Islamic tradition, it was built by Prophet Ibrahim (Abraham) and his son Ismail as the first house of worship dedicated to Allah alone.</p>
    <p><strong>Why face the Kaaba?</strong> Muslims face the Kaaba (called the Qibla) during prayer for unity and order — not because they worship it. Just as people in a meeting face a common direction, Muslims worldwide face one point to symbolize their unity in worshipping the One God.</p>
    <p>The Prophet Ibrahim himself is known as the father of monotheism — the one who destroyed idols and called people to worship Allah alone. It would be contradictory for Muslims, who follow his legacy, to worship a building.</p>
    <p>The Quran is clear: <blockquote>"It is not their meat nor their blood that reaches Allah; it is your piety that reaches Him." [22:37]</blockquote> Allah does not need the Kaaba — it is a practical, symbolic direction for unified worship.</p>`,
  },
  {
    slug: "life-after-death",
    category: "Common Misconceptions",
    icon: "🌅",
    title: "How do you know there is life after death?",
    desc: "The Islamic perspective on the Hereafter — its certainty, purpose, and what awaits us.",
    content: `<p>The belief in life after death (Akhirah) is one of the six pillars of Islamic faith. Islam provides both rational and scriptural evidence for the existence of an afterlife.</p>
    <p><strong>The Argument from Justice:</strong> In this world, we observe that justice is often not served. Oppressors live comfortably while the innocent suffer. A just and all-knowing God would not allow injustice to go unaddressed forever. The afterlife is where ultimate justice is served.</p>
    <p><strong>The Quran states:</strong> <blockquote>"Does man think that he will be left neglected? Was he not a sperm from semen emitted? Then he was a clinging clot, and Allah created him and proportioned him... Is not that Creator able to give life to the dead?" [75:36-40]</blockquote></p>
    <p><strong>The Argument from Human Nature:</strong> Every human being has an innate sense of accountability and a longing for ultimate justice. This universal human experience points to the reality of judgment and an afterlife.</p>
    <p><strong>Scientific Observation:</strong> Energy is never destroyed — it transforms. The soul, as a form of divine energy, does not simply cease to exist. The Quran describes the afterlife in vivid detail — Heaven (Jannah) for the believers and Hell (Jahannam) for those who rejected the truth.</p>`,
  },

  // ABOUT ALLAH
  {
    slug: "who-is-allah",
    category: "About Allah",
    icon: "✨",
    title: "Who is Allah?",
    desc: "Allah is the Arabic name for God — the same God worshipped by Abraham, Moses, and Jesus.",
    content: `<p><strong>Allah</strong> is simply the Arabic word for God — the same God worshipped by all the prophets, from Adam to Abraham, Moses, Jesus, and Muhammad (peace be upon them all). Arabic-speaking Christians and Jews also use the word "Allah" to refer to God.</p>
    <p>The name "Allah" is unique in that it has no plural form and no gender, which reflects the absolute oneness and uniqueness of God in Islamic theology.</p>
    <p>The Quran describes Allah in the most beautiful terms: <blockquote>"Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth." [2:255 — Ayat al-Kursi]</blockquote></p>
    <p>Allah has 99 beautiful names (Asma ul-Husna), each describing one of His perfect attributes: Ar-Rahman (The Most Merciful), Ar-Rahim (The Most Compassionate), Al-Malik (The King), Al-Quddus (The Holy), As-Salam (The Source of Peace), and many more.</p>
    <p>Allah is not a distant, uncaring God. He says in the Quran: "And when My servants ask you about Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." [2:186]</p>`,
  },
  {
    slug: "who-do-muslims-worship",
    category: "About Allah",
    icon: "🤲",
    title: "Who Do Muslims Worship?",
    desc: "Muslims worship the same God as Jews and Christians — the God of Abraham, the Creator of all things.",
    content: `<p>Muslims worship Allah — the One God, Creator of the heavens and the earth. This is the same God worshipped by the prophets Abraham, Moses, and Jesus (peace be upon them all). The word "Allah" is not a different God — it is simply the Arabic name for God, used by Arab Christians and Jews as well.</p>
    <p>The Quran addresses the People of the Book (Jews and Christians): <blockquote>"Say: O People of the Scripture, come to a word that is equitable between us and you — that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah." [3:64]</blockquote></p>
    <p>Muslims believe in the absolute oneness of God (Tawheed). They reject any concept of Trinity, incarnation, or partnership in divinity. God is One, without any associates, children, or intermediaries.</p>
    <p>The worship of Allah encompasses every aspect of a Muslim's life — from the five daily prayers to ethical conduct in business, treatment of family, and care for neighbors. Islam is not just a religion of rituals but a complete way of life centered around submission to and worship of the One God.</p>`,
  },
  {
    slug: "one-true-god",
    category: "About Allah",
    icon: "🌟",
    title: "The One True God",
    desc: "An exploration of monotheism and why Islam's concept of God is the most rational and pure.",
    content: `<p>Monotheism — the belief in one God — is the foundation of Islam, just as it was the foundation of the message of every prophet from Adam to Muhammad (peace be upon them all). The Quran calls this belief "Tawheed" — the absolute oneness of God.</p>
    <p>The Quran presents the argument for monotheism logically: <blockquote>"If there were within the heavens and earth gods besides Allah, they both would have been ruined. So exalted is Allah, Lord of the Throne, above what they describe." [21:22]</blockquote></p>
    <p>Multiple gods would compete, disagree, and create chaos — yet the universe operates with perfect harmony and precision. This harmony is itself evidence of one supreme, all-knowing Creator.</p>
    <p>The concept of the "One True God" in Islam means that only Allah deserves worship, love, fear, and complete trust. No person, statue, force of nature, or celestial body is worthy of worship — only the Creator of all these things.</p>
    <p>This pure monotheism gives Muslims a direct, unmediated relationship with their Creator. There is no need for a priest, saint, or intermediary. Anyone, anywhere, can call upon Allah directly and be heard.</p>`,
  },

  // ABOUT MUHAMMAD
  {
    slug: "prophet-muhammad-mercy-to-mankind",
    category: "About Muhammad",
    icon: "🌙",
    title: "Prophet Muhammad ﷺ — Mercy to Mankind",
    desc: "The life and legacy of the final messenger, sent as a mercy to all of creation.",
    content: `<p>Prophet Muhammad ﷺ (peace be upon him) was born in Mecca in 570 CE, in the tribe of Quraysh. He is believed by Muslims to be the final prophet and messenger of Allah, sent to guide all of humanity until the Day of Judgment.</p>
    <p>Allah describes him in the Quran: <blockquote>"And We have not sent you except as a mercy to the worlds." [21:107]</blockquote></p>
    <p>Before receiving revelation at age 40, Muhammad ﷺ was known among his people as <strong>Al-Amin</strong> (The Trustworthy) and <strong>Al-Sadiq</strong> (The Truthful). Even his enemies acknowledged his impeccable character.</p>
    <p>His mercy extended to all — to enemies, to animals, to the poor, to orphans, and to those marginalized by society. He said: "None of you truly believes until he loves for his brother what he loves for himself."</p>
    <p>His 23 years of prophethood transformed Arabia from a society of idol worship, tribal warfare, and injustice into a community of faith, brotherhood, and civilization. His influence spread across the world and continues to this day, making him the most influential human being in history.</p>`,
  },
  {
    slug: "message-of-prophet-muhammad",
    category: "About Muhammad",
    icon: "📜",
    title: "The Message of Prophet Muhammad ﷺ",
    desc: "The core message the Prophet brought — the oneness of God, justice, and mercy for all mankind.",
    content: `<p>The message of Prophet Muhammad ﷺ can be summarized in one word: <strong>Tawheed</strong> — the absolute oneness of God. He called people away from idol worship, superstition, and division, and toward the worship of the One Creator.</p>
    <p>But his message was not only theological. It was a comprehensive social revolution:</p>
    <ul>
      <li><strong>Equality:</strong> He declared that all humans are equal regardless of race, color, or social status. "An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab; a white person has no superiority over a black person, nor a black person over a white person — except through piety and good deeds."</li>
      <li><strong>Justice:</strong> He established a system of law and ethics that protected the rights of the weak — women, orphans, slaves, and the poor.</li>
      <li><strong>Compassion:</strong> He taught that mercy to all living things is a sign of faith. "The merciful will be shown mercy by the Most Merciful."</li>
    </ul>
    <p>His message was not new — it was a continuation of the message of all the prophets before him: worship Allah alone and live righteously. But it was the final, complete, and preserved version of that message.</p>`,
  },
  {
    slug: "non-muslim-scholars-on-muhammad",
    category: "About Muhammad",
    icon: "📖",
    title: "What Non-Muslim Scholars Said About Prophet Muhammad ﷺ",
    desc: "Historians, philosophers, and thinkers from around the world recognized the greatness of the Prophet.",
    content: `<p>Throughout history, countless non-Muslim scholars, historians, and thinkers have studied the life of Prophet Muhammad ﷺ and acknowledged his extraordinary impact on humanity.</p>
    <p><strong>George Bernard Shaw:</strong> "I have always held the religion of Muhammad in high estimation because of its wonderful vitality. It is the only religion which appears to me to possess that assimilating capacity to the changing phase of existence which can make itself appeal to every age. I have studied him — the wonderful man — and in my opinion far from being an anti-Christ, he must be called the Savior of Humanity."</p>
    <p><strong>Mahatma Gandhi:</strong> "I wanted to know the best of the life of one who holds today an undisputed sway over the hearts of millions of mankind... I became more than ever convinced that it was not the sword that won a place for Islam in those days. It was the rigid simplicity, the utter self-effacement of the Prophet, the scrupulous regard for pledges, his intense devotion to his friends and followers, his intrepidity, his fearlessness, his absolute trust in God and in his own mission."</p>
    <p><strong>Thomas Carlyle:</strong> "How one man single-handedly, could weld warring tribes and wandering Bedouins into a most powerful and civilized nation in less than two decades."</p>`,
  },
  {
    slug: "most-influential-person-michael-hart",
    category: "About Muhammad",
    icon: "🏆",
    title: "Most Influential Person in History — by Michael H. Hart",
    desc: "A non-Muslim historian ranked Prophet Muhammad ﷺ as the most influential person in all of human history.",
    content: `<p>In his 1978 book <strong>"The 100: A Ranking of the Most Influential Persons in History"</strong>, non-Muslim historian and astrophysicist Michael H. Hart ranked Prophet Muhammad ﷺ as the single most influential person in human history — above Jesus, Newton, Buddha, and all others.</p>
    <p>Hart wrote: <blockquote>"My choice of Muhammad to lead the list of the world's most influential persons may surprise some readers and may be questioned by others, but he was the only man in history who was supremely successful on both the religious and secular levels."</blockquote></p>
    <p>He further explained that Muhammad ﷺ was the primary force behind both the founding of Islam and the practical implementation of the Islamic state. Unlike other religious figures whose followers shaped their religions after them, Muhammad ﷺ personally established the religious principles, the political system, and the moral code of an entire civilization.</p>
    <p>This acknowledgment from a non-Muslim scholar is particularly noteworthy because it is based purely on historical and sociological analysis — not religious conviction. It demonstrates that the Prophet's impact on humanity transcends religious boundaries and stands as an objective historical reality.</p>`,
  },

  // ABOUT JESUS
  {
    slug: "who-was-jesus",
    category: "About Jesus",
    icon: "✝️",
    title: "Who was Jesus? The Islamic Perspective",
    desc: "Muslims love and respect Jesus as a great prophet — but not as the son of God.",
    content: `<p>Muslims have great love and respect for Jesus (Isa ﷺ) — he is one of the most revered prophets in Islam. However, the Islamic understanding of Jesus differs significantly from Christian doctrine.</p>
    <p>According to Islam, Jesus was a human prophet and messenger of Allah, born miraculously to the Virgin Mary (Maryam), without a father. The Quran dedicates an entire chapter to Mary (Surah Maryam) — the only chapter named after a woman.</p>
    <p>The Quran says about Jesus: <blockquote>"The Messiah, Jesus the son of Mary, was but a messenger of Allah and His word which He directed to Mary and a soul from Him." [4:171]</blockquote></p>
    <p>Muslims believe Jesus performed miracles by the permission of Allah — healing the sick, giving sight to the blind, and raising the dead. But these miracles were signs of his prophethood, not evidence of divinity.</p>
    <p>The key difference: Islam teaches that Jesus was not crucified nor did he die on the cross. Allah raised him up, and Muslims believe he will return before the Day of Judgment as a sign of the Hour.</p>`,
  },
  {
    slug: "how-jesus-people-knew-him",
    category: "About Jesus",
    icon: "👥",
    title: "How Did Jesus' People Know Him?",
    desc: "Historical and scriptural evidence of how the contemporaries of Jesus understood his identity.",
    content: `<p>One of the most important questions in understanding Jesus is: how did the people who lived with him, heard him, and followed him understand who he was? The historical evidence suggests they understood him as a prophet — not as God incarnate.</p>
    <p>The Bible itself records multiple instances where Jesus is referred to as a prophet by his contemporaries: "When Jesus entered Jerusalem, the whole city was stirred and asked, 'Who is this?' The crowds answered, 'This is Jesus, the prophet from Nazareth in Galilee.'" [Matthew 21:10-11]</p>
    <p>Jesus himself referred to himself as a prophet: "A prophet is not accepted in his hometown." [Luke 4:24]. He also said: "My Father is greater than I." [John 14:28] — indicating a distinction between himself and God.</p>
    <p>The concept of Jesus as God — the Trinity — was not formally established until the Council of Nicaea in 325 CE, nearly 300 years after Jesus. This doctrine was a later theological development, not the original understanding of his earliest followers.</p>
    <p>Islam's position — that Jesus was a great prophet and messenger — is actually consistent with how his own people initially understood him.</p>`,
  },
  {
    slug: "god-and-jesus-quran-bible",
    category: "About Jesus",
    icon: "📔",
    title: "God and Jesus — According to the Quran, New and Old Testament",
    desc: "A comparative look at what the scriptures actually say about the nature of God and Jesus.",
    content: `<p>A careful reading of the Quran, New Testament, and Old Testament reveals a consistent theme: God is One, and Jesus was His messenger — not God Himself.</p>
    <p><strong>The Old Testament:</strong> "Hear, O Israel: The Lord our God, the Lord is One." [Deuteronomy 6:4] — This is the foundational statement of Jewish faith, affirming absolute monotheism.</p>
    <p><strong>Jesus in the New Testament:</strong> When asked about the greatest commandment, Jesus replied: "The most important one is this: Hear, O Israel: The Lord our God, the Lord is One." [Mark 12:29] — Jesus himself affirmed the oneness of God.</p>
    <p>Jesus prayed to God: "My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will." [Matthew 26:39] — A man praying to God, not God praying to Himself.</p>
    <p><strong>The Quran:</strong> "And when Allah will say: O Jesus, son of Mary, did you say to the people, 'Take me and my mother as deities besides Allah?' He will say, 'Exalted are You! It was not for me to say that to which I have no right.'" [5:116]</p>
    <p>The Quran presents Jesus as honoring the absolute oneness of God — consistent with the message of all prophets before him.</p>`,
  },

  // ABOUT THE QURAN
  {
    slug: "who-wrote-the-quran",
    category: "About the Quran",
    icon: "📖",
    title: "Who Wrote the Quran?",
    desc: "The Quran is the word of Allah — revealed to Prophet Muhammad through Angel Jibreel over 23 years.",
    content: `<p>Muslims believe the Quran is the direct word of Allah, revealed to Prophet Muhammad ﷺ through the Angel Jibreel (Gabriel) over a period of 23 years (610-632 CE). It was not written by Muhammad ﷺ — he was in fact illiterate and could not read or write.</p>
    <p>The Prophet ﷺ would receive revelation and immediately recite it to his companions, who would memorize it and write it down. The Quran was compiled into a single book during the caliphate of Abu Bakr and standardized during the caliphate of Uthman.</p>
    <p>The Quran itself challenges anyone to produce something like it: <blockquote>"And if you are in doubt about what We have sent down upon Our Servant, then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful." [2:23]</blockquote></p>
    <p>This challenge — known as the "Challenge of the Quran" — has stood for over 1,400 years. Despite being made to the most eloquent speakers of Arabic, no one has been able to produce anything comparable to the Quran in literary quality, depth of meaning, and internal consistency.</p>
    <p>The Quran also contains information about embryology, cosmology, and other scientific facts that were unknown at the time of its revelation — further evidence of its divine origin.</p>`,
  },
  {
    slug: "preservation-of-quran",
    category: "About the Quran",
    icon: "🛡️",
    title: "Proof of the Preservation of the Quran",
    desc: "The Quran is the only religious scripture that has been perfectly preserved in its original language.",
    content: `<p>The Quran is unique among the world's religious scriptures in that it has been perfectly preserved in its original Arabic language for over 1,400 years. Allah Himself guaranteed its preservation: <blockquote>"Indeed, it is We who sent down the Quran and indeed, We will be its guardian." [15:9]</blockquote></p>
    <p><strong>Memorization (Huffaz):</strong> From the time of the Prophet ﷺ, Muslims have memorized the entire Quran from memory. Today, millions of Muslims worldwide — known as Huffaz — have committed the entire 604-page text to memory. This oral tradition has never been broken.</p>
    <p><strong>Written Manuscripts:</strong> The oldest complete Quran manuscripts (such as the Sana'a manuscript in Yemen and the Birmingham Quran) have been carbon-dated to within years of the Prophet's lifetime, confirming that the text has not changed.</p>
    <p><strong>Internal Consistency:</strong> Unlike the Bible, which has hundreds of different versions and translations that contradict each other, the Quran has one authoritative Arabic text that is identical in every Muslim country in the world.</p>
    <p>No other book in human history has been memorized in its entirety by millions of people in its original language. This is itself a miracle — a fulfillment of Allah's promise to preserve His final revelation.</p>`,
  },
  {
    slug: "why-gods-book-has-no-errors",
    category: "About the Quran",
    icon: "🌿",
    title: "Why God's Book Cannot Contain Errors",
    desc: "The Quran's internal consistency and scientific accuracy are evidence of its divine authorship.",
    content: `<p>If the Quran is truly the word of an All-Knowing, All-Wise God, it should be free from errors, contradictions, and inconsistencies — and that is exactly what we find.</p>
    <p>The Quran itself issues a challenge: <blockquote>"Then do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction." [4:82]</blockquote></p>
    <p><strong>Scientific Accuracy:</strong> The Quran mentions facts about embryology, cosmology, geology, and oceanography that were not scientifically known until the 20th century. For example:</p>
    <ul>
      <li>The universe's expansion [51:47]</li>
      <li>The development of the human embryo [23:12-14]</li>
      <li>The barrier between salt and fresh water [55:19-20]</li>
      <li>The protective function of the sky [21:32]</li>
    </ul>
    <p><strong>Historical Accuracy:</strong> Despite being revealed 1,400 years ago, the Quran's historical accounts align with modern archaeological discoveries.</p>
    <p><strong>No Contradictions:</strong> Despite covering theology, law, history, science, and ethics across 114 chapters revealed over 23 years, the Quran is remarkably consistent — a feat impossible for a human author.</p>`,
  },

  // BECOMING MUSLIM
  {
    slug: "how-to-convert-to-islam",
    category: "Becoming Muslim",
    icon: "🌙",
    title: "How to Convert to Islam and Become a Muslim",
    desc: "Becoming a Muslim is simple — it requires sincerity of heart and the declaration of faith.",
    content: `<p>Becoming a Muslim is one of the simplest and most profound acts a person can perform. It requires no ceremony, no baptism, and no intermediary. All that is needed is a sincere belief in the heart and the declaration of the Shahada.</p>
    <p><strong>The Shahada</strong> (Declaration of Faith): <blockquote>"Ash-hadu an la ilaha ill-Allah, wa ash-hadu anna Muhammadan rasul-ullah."<br/>"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."</blockquote></p>
    <p>When a person sincerely says this with belief in their heart, they become a Muslim. It is that simple.</p>
    <p><strong>What happens when you become a Muslim?</strong></p>
    <ul>
      <li>All previous sins are forgiven — you start with a completely clean slate</li>
      <li>You join a global community of over 1.8 billion Muslims</li>
      <li>You gain a direct relationship with Allah, without any intermediary</li>
      <li>You receive guidance for every aspect of your life</li>
    </ul>
    <p>If you are interested in taking your Shahada, please contact Masjid Hamza. We have brothers and sisters ready to support you every step of the way. You are not alone on this journey!</p>`,
  },
  {
    slug: "benefits-of-becoming-muslim",
    category: "Becoming Muslim",
    icon: "💎",
    title: "Benefits of Becoming a Muslim",
    desc: "Islam offers peace of mind, purpose, community, and a direct connection to the Creator.",
    content: `<p>Embracing Islam brings profound benefits — both in this life and the next. Here are some of the most significant:</p>
    <p><strong>1. Purpose and Meaning:</strong> Islam answers the most fundamental questions of human existence — Who am I? Why am I here? What happens after I die? This clarity brings profound peace and direction to life.</p>
    <p><strong>2. Direct Connection to God:</strong> Islam removes all barriers between a person and their Creator. There is no need for a priest, confession booth, or intermediary. You can speak to Allah directly at any moment through prayer and supplication.</p>
    <p><strong>3. Forgiveness of All Past Sins:</strong> When a person accepts Islam, all their previous sins are completely forgiven. The Prophet ﷺ said: "Islam wipes out whatever came before it." This is a fresh start — a spiritual rebirth.</p>
    <p><strong>4. Peace of Mind:</strong> The Quran says: "Verily, in the remembrance of Allah do hearts find rest." [13:28]. The regular practice of prayer, Quran recitation, and dhikr brings a deep and lasting inner peace.</p>
    <p><strong>5. Community:</strong> Muslims worldwide are united as one family. The global Muslim community (Ummah) provides brotherhood, sisterhood, and support that transcends race, nationality, and social status.</p>
    <p><strong>6. Eternal Reward:</strong> Most importantly, Islam is the path to Paradise (Jannah) — eternal happiness and closeness to Allah in the Hereafter.</p>`,
  },

  // ANSWERS TO RACISM & JUSTICE
  {
    slug: "malcolm-x-letter-from-hajj",
    category: "Answers to Racism & Justice",
    icon: "✊",
    title: "Malcolm X's Letter from Hajj",
    desc: "The powerful letter Malcolm X wrote from Mecca in 1964 — a testimony to Islam's power to unite humanity.",
    content: `<p>In April 1964, Malcolm X (El-Hajj Malik El-Shabazz) made the pilgrimage to Mecca (Hajj). What he witnessed there transformed his understanding of race and humanity. He wrote the following letter to his assistants in Harlem:</p>
    <blockquote>
    <p>"Never have I witnessed such sincere hospitality and overwhelming spirit of true brotherhood as is practiced by people of all colors and races here in this ancient Holy Land, the home of Abraham, Muhammad and all the other Prophets of the Holy Scriptures. For the past week, I have been utterly speechless and spellbound by the graciousness I see displayed all around me by people of all colors."</p>
    <p>"There were tens of thousands of pilgrims, from all over the world. They were of all colors, from blue-eyed blonds to black-skinned Africans. But we were all participating in the same ritual, displaying a spirit of unity and brotherhood that my experiences in America had led me to believe never could exist between the white and non-white."</p>
    <p>"America needs to understand Islam, because this is the one religion that erases from its society the race problem. Throughout my travels in the Muslim world, I have met, talked to, and even eaten with people who in America would have been considered white — but the white attitude was removed from their minds by the religion of Islam."</p>
    </blockquote>
    <p>Malcolm X's letter stands as one of the most powerful testimonies to Islam's capacity to transcend racial barriers and unite all of humanity under the banner of faith in the One God.</p>`,
  },
  {
    slug: "prophets-last-sermon",
    category: "Answers to Racism & Justice",
    icon: "📣",
    title: "The Prophet Muhammad's Last Sermon",
    desc: "The final sermon of the Prophet ﷺ — a declaration of human equality, justice, and the rights of all people.",
    content: `<p>On the 9th of Dhul Hijjah, 10 AH (632 CE), Prophet Muhammad ﷺ delivered his final sermon (Khutbat al-Wada) to over 100,000 companions on the plains of Arafat during his farewell pilgrimage. It stands as one of the greatest declarations of human rights in history:</p>
    <blockquote>
    <p>"O People! Listen to my words carefully, for I do not know whether I shall meet you again on such an occasion in the future. O People! Your lives and your property shall be inviolate until you meet your Lord. The safety of your lives and of your property shall be as inviolate as this holy day and holy month."</p>
    <p>"O People! Your Lord is One and your father is one. You are all children of Adam, and Adam was created from dust. An Arab is not superior to a non-Arab, nor is a non-Arab superior to an Arab; a white person is not superior to a black person, nor is a black person superior to a white person — except through piety and good deeds."</p>
    <p>"O People! Treat women well and be kind to them, for they are your partners and committed helpers. You have rights over them and they have rights over you."</p>
    <p>"I have left among you that which if you hold fast to it, you shall not go astray: the Book of Allah and the Sunnah of His Prophet."</p>
    </blockquote>
    <p>Over 1,400 years before the United Nations Universal Declaration of Human Rights, the Prophet ﷺ declared the equality of all human beings, the sanctity of life and property, the rights of women, and the supremacy of divine guidance — in one sermon to the entire Muslim world.</p>`,
  },
];