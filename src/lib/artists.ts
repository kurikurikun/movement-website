export interface Artist {
  slug: string;
  name: string;
  nameJa: string;
  mediumEn: string;
  mediumJa: string;
  bioEn: string;
  bioJa: string;
  instagram?: string;
  website?: string;
  /**
   * Portraits in /public/images/artists — up to 3 per artist, first is the lead image.
   * May be empty for artists whose photos have not been supplied yet.
   */
  photos: string[];
}

const photos = (slug: string, count = 1) =>
  Array.from({ length: count }, (_, i) => `/images/artists/${slug}-${i + 1}.jpg`);

export const artists: Artist[] = [
  {
    slug: "aida-makoto",
    name: "Aida Makoto",
    nameJa: "会田誠",
    mediumEn: "Painting, manga, sculpture, performance, installation",
    mediumJa: "絵画、漫画、立体、パフォーマンス、インスタレーション",
    bioEn:
      "Graduated in oil painting from Tokyo University of the Arts in 1989 and completed his master's there in 1991. His practice ranges across painting, photography, sculpture, performance, installation, fiction, manga and even urban planning, crossing historical and social boundaries to address war, salaryman culture and beauty. Represented by Mizuma Art Gallery.",
    bioJa:
      "1989年東京藝術大学美術学部絵画科油画専攻卒業、1991年同大学院美術研究科修了。絵画のみならず、写真、立体、パフォーマンス、インスタレーション、小説、漫画、都市計画まで、国内外で多岐にわたる表現領域を手掛ける。戦争、サラリーマン文化、美といった主題を、歴史と社会の境界を横断しながら扱う。ミヅマアートギャラリー所属。",
    website: "https://mizuma-art.co.jp/en/artists/aida-makoto/",
    photos: photos("aida-makoto", 3),
  },
  {
    slug: "shichinohe-masaru",
    name: "Shichinohe Masaru",
    nameJa: "七戸優",
    mediumEn: "Painting (acrylic on wood panel)",
    mediumJa: "絵画（木製パネル・アクリル）",
    bioEn:
      "Graduated in architecture from Musashino Art University in 1981, worked three years in a company, then became a freelance illustrator. Drawing on Inagaki Taruho and Franz Kafka, he paints surrealist figurative worlds in an illustrator's idiom — boys, girls and rabbits rendered in classical technique, usually in acrylic on small wooden panels around 30cm square. One of the leading painters of contemporary Japanese fantastic art, shown at Aoki Gallery.",
    bioJa:
      "1981年武蔵野美術大学造形学部建築学科卒業。3年間の会社勤めを経てフリーのイラストレーターに。稲垣足穂やフランツ・カフカに影響を受け、少年、少女、兎をモチーフに、古典的な技法でシュルレアリスティックな具象絵画を描く。30cm四方ほどの小さな木製パネルにアクリルで描かれることが多い。現代日本の幻想絵画を代表する画家の一人。青木画廊で発表を重ねている。",
    instagram: "https://www.instagram.com/masaru_shichinohe/",
    photos: photos("shichinohe-masaru", 3),
  },
  {
    slug: "yanobe-kenji",
    name: "Yanobe Kenji",
    nameJa: "ヤノベケンジ",
    mediumEn: "Sculpture, installation",
    mediumJa: "彫刻、インスタレーション",
    bioEn:
      "Spent a year at the Royal College of Art in London in 1989 and completed his master's at Kyoto City University of Arts in 1991. Among the first to bring the language of Japanese manga, anime and tokusatsu into contemporary art, he is known for post-apocalyptic survival suits, mechanical and large-scale sculptures, and the Sun Child monument — humorous forms carrying social messages about survival, hope and our relationship with technology. Professor at Kyoto University of the Arts and director of its Ultra Factory since 2008.",
    bioJa:
      "1989年ロンドンのロイヤル・カレッジ・オブ・アートに交換留学、1991年京都市立芸術大学大学院美術研究科修了。日本の漫画・アニメ・特撮の要素をいち早く現代美術に取り込んだ作家の一人。終末世界を生き延びるためのサバイバル・スーツ、機械仕掛けの立体や巨大彫刻、そして《サン・チャイルド》で知られる。ユーモラスな造形の内側に、生存と希望、人間とテクノロジーの関係をめぐるメッセージを織り込む。2008年より京都芸術大学教授兼ウルトラファクトリー・ディレクター。",
    instagram: "https://www.instagram.com/kenji_yanobe/",
    website: "https://yanobe.com/en",
    photos: photos("yanobe-kenji", 3),
  },
  {
    slug: "ikeya-tomohide",
    name: "Ikeya Tomohide",
    nameJa: "池谷友秀",
    mediumEn: "Photography, fine art",
    mediumJa: "写真、ファインアート",
    bioEn:
      "Studied at Tokyo College of Photography and assisted the photographer Takasaki Katsuji before going freelance in 2002. Fascinated by water since childhood, he photographs the human body underwater to explore breath, control and chance, and the boundary between life and death. Known for the BREATH, MOON, WAVE and OCEAN series.",
    bioJa:
      "東京綜合写真専門学校に学び、写真家・高崎勝二氏に師事した後、2002年よりフリーランスとして活動。幼少期から水という自然現象に魅せられ、水中の身体を通して、呼吸、制御と偶然、そして生と死の境界を見つめる。〈BREATH〉〈MOON〉〈WAVE〉〈OCEAN〉の各シリーズで知られる。",
    instagram: "https://www.instagram.com/tomohideikeya/",
    website: "https://tomohide-ikeya.com/",
    photos: photos("ikeya-tomohide", 3),
  },
  {
    slug: "ichihara-etsuko",
    name: "Ichihara Etsuko",
    nameJa: "市原えつこ",
    mediumEn: "Media art, digital, installation",
    mediumJa: "メディアアート、デジタル、インスタレーション",
    bioEn:
      "Graduated from Waseda University's School of Culture, Media and Society in 2011, and completed a master's in Intermedia Art at Tokyo University of the Arts in 2025, top of her class. A media artist who reads Japanese culture, custom and belief from an unusual angle and rebuilds them with technology — devising new rituals and mythologies for a technological society, from death rites to future food systems.",
    bioJa:
      "2011年早稲田大学文化構想学部表象・メディア論系卒業、2025年東京藝術大学大学院美術研究科先端芸術表現専攻を首席で修了。日本の文化・風習・信仰を独自の視点で読み解き、テクノロジーによって組み替えるメディアアーティスト。弔いの儀式から未来の食まで、技術社会における新しい儀礼と神話を構想する。",
    instagram: "https://www.instagram.com/etsuko_ichihara/",
    website: "http://etsuko-ichihara.com/",
    photos: photos("ichihara-etsuko", 3),
  },
  {
    slug: "odani-motohiko",
    name: "Odani Motohiko",
    nameJa: "小谷元彦",
    mediumEn: "Sculpture, installation, video",
    mediumJa: "彫刻、インスタレーション、映像",
    bioEn:
      "Graduated in sculpture from Tokyo University of the Arts in 1995 and completed his master's there in 1997. His work probes the boundary between presence and absence, the body and phantom sensation, using taxidermy, video and digital fabrication. He debuted in 1997 with Phantom Limb at P-House, Daikanyama.",
    bioJa:
      "1995年東京藝術大学美術学部彫刻科卒業、1997年同大学院美術研究科彫刻専攻修了。剥製、映像、デジタル・ファブリケーションを用いながら、存在と不在、身体と幻肢感覚の境界を探る。1997年、代官山P-Houseでの個展《Phantom Limb》でデビュー。",
    website: "https://phantom-limb.com/en/home-english/",
    photos: photos("odani-motohiko", 3),
  },
  {
    slug: "miwa-yanagi",
    name: "Miwa Yanagi",
    nameJa: "やなぎみわ",
    mediumEn: "Photography, theatre, performance",
    mediumJa: "写真、演劇、パフォーマンス",
    bioEn:
      "Entered the crafts department at Kyoto City University of Arts to study textiles and dyeing, and completed her master's there. Using composite photography, she has examined gender, ageing and suppressed personality in the Elevator Girls and My Grandmothers series. She represented Japan at the 53rd Venice Biennale in 2009 and has worked seriously in theatre as a director since 2011. Visiting professor at Kyoto University of the Arts since 2012.",
    bioJa:
      "京都市立芸術大学工芸科染織専攻に進み、同大学院美術研究科修了。合成写真の手法を用いて、ジェンダー、老い、抑圧されたパーソナリティを主題としてきた。〈エレベーター・ガール〉〈マイ・グランドマザーズ〉の各シリーズで知られる。2009年第53回ヴェネツィア・ビエンナーレ日本館代表作家。2011年より本格的に演劇活動を開始し、演出家としても活動。2012年より京都芸術大学客員教授。",
    instagram: "https://www.instagram.com/miwa_yanagi/",
    website: "http://www.yanagimiwa.net/e/",
    photos: photos("miwa-yanagi", 3),
  },
  {
    slug: "sorayama-hajime",
    name: "Sorayama Hajime",
    nameJa: "空山基",
    mediumEn: "Illustration, painting",
    mediumJa: "イラストレーション、絵画",
    bioEn:
      "Graduated from Chuo Art School in 1969, based in Tokyo. Known worldwide for the Sexy Robot series — hyperreal chrome androids rendered by hand — his work is foundational to the visual language of futurism and science-fiction art, and has reached far beyond the gallery through collaborations with Sony's AIBO and Daft Punk.",
    bioJa:
      "1969年中央美術学園卒業。東京都在住。手描きによる超写実的なクロームのアンドロイドを描く〈セクシーロボット〉シリーズで世界的に知られ、近未来・SFアートの視覚言語を決定づけた。ソニー「AIBO」やダフト・パンクとの仕事を通じて、その影響は美術の枠を超えて広がっている。",
    instagram: "https://www.instagram.com/hajimesorayamaofficial/",
    website: "https://nanzuka.com/en/artists/hajime-sorayama",
    photos: photos("sorayama-hajime", 3),
  },
  {
    slug: "kumazawa-mikiko",
    name: "Kumazawa Mikiko",
    nameJa: "熊澤未来子",
    mediumEn: "Drawing (pencil), large-scale works",
    mediumJa: "ドローイング（鉛筆）、大型作品",
    bioEn:
      "Based in Tokyo. Graduated in Japanese painting from Musashino Art University in 2006 and completed her master's there in 2008. She is known for monumental pencil drawings whose dense, frenetic compositions push the everyday into the extraordinary. Associate professor in Musashino Art University's Japanese painting department since 2024. Represented by Mizuma Art Gallery.",
    bioJa:
      "東京都在住。2006年武蔵野美術大学造形学部日本画学科卒業、2008年同大学院造形研究科修士課程日本画コース修了。日常と非日常が入り混じる、密度が高く狂騒的な場面を、巨大な鉛筆画として描き出す。2024年より武蔵野美術大学造形学部日本画学科准教授。ミヅマアートギャラリー所属。",
    website: "https://mizuma-art.co.jp/en/artists/kumazawa-mikiko/",
    photos: photos("kumazawa-mikiko", 3),
  },
  {
    slug: "saeborg",
    name: "Saeborg",
    nameJa: "サエボーグ",
    mediumEn: "Performance art, latex sculpture",
    mediumJa: "パフォーマンスアート、ラテックス彫刻",
    bioEn:
      "Based in Tokyo. In her own words, Saeborg is an imperfect cyborg — half human, half toy. She hand-makes latex bodysuits worn as a second skin and performs in them as toy-like sows and insects, building experimental utopias around the creatures at the bottom of the ecosystem. Her works premiere at the Tokyo fetish party Department-H before travelling to museums and galleries internationally.",
    bioJa:
      "東京都在住。「サエボーグは不完全なサイボーグ。半分人間で、半分玩具。」自ら手がけたラテックス製ボディスーツを皮膚の拡張として身にまとい、玩具化された豚や昆虫となってパフォーマンスを行う。生態系の底辺に置かれた生き物たちを主役に、実験的なユートピアを立ち上げる。作品はいずれも東京のフェティッシュ・パーティ「Department-H」で初演され、その後国内外の美術館・ギャラリーで発表されている。",
    instagram: "https://www.instagram.com/saeborg_latex/",
    website: "https://saeborg.com/",
    photos: photos("saeborg", 3),
  },
  {
    slug: "nawa-kohei",
    name: "Nawa Kohei",
    nameJa: "名和晃平",
    mediumEn: "Sculpture, installation, direction",
    mediumJa: "彫刻、インスタレーション、ディレクション",
    bioEn:
      "Based in Kyoto. Graduated in sculpture from Kyoto City University of Arts in 1998, spent 1999 on exchange at the Royal College of Art in London, and in 2003 became the first to receive a doctorate in sculpture from his alma mater. His PixCell series sheathes taxidermy in glass beads; other works use foam, oil and digital fabrication to test the boundary between digital and physical sensation. Professor at Kyoto University of the Arts and director of the creative platform Sandwich.",
    bioJa:
      "京都市在住。1998年京都市立芸術大学美術学部彫刻専攻卒業、1999年ロンドンのロイヤル・カレッジ・オブ・アートに交換留学、2003年同大学院博士後期課程修了、彫刻専攻として初の博士号（美術）を取得。剥製をガラスビーズで覆う〈PixCell〉シリーズのほか、泡や液体、デジタル・ファブリケーションを用いた作品を通じて、デジタルな知覚と物質的な感覚の境界を問う。京都芸術大学教授、クリエイティブ・プラットフォーム SANDWICH 主宰。",
    instagram: "https://www.instagram.com/nawa_kohei/",
    website: "https://kohei-nawa.net/",
    photos: photos("nawa-kohei", 3),
  },
  {
    slug: "matsui-fuyuko",
    name: "Matsui Fuyuko",
    nameJa: "松井冬子",
    mediumEn: "Nihonga (Japanese painting)",
    mediumJa: "日本画",
    bioEn:
      "Graduated in Japanese painting from Tokyo University of the Arts in 2002, completed her master's in 2004 and took a doctorate in fine art there in 2007. Working in traditional Nihonga technique, she paints disease, pain, eroticism and death with a haunting, ethereal precision.",
    bioJa:
      "2002年東京藝術大学美術学部絵画科日本画専攻卒業、2004年同大学院修士課程修了、2007年同大学院博士後期課程を修了し博士号（美術）を取得。伝統的な日本画の技法を用いながら、病、痛み、エロティシズム、死を、幽玄で静かな精度をもって描き出す。",
    instagram: "https://www.instagram.com/fuyukomatsui/",
    website: "https://matsuifuyuko.com/",
    photos: photos("matsui-fuyuko", 3),
  },
  {
    slug: "tsukuda-hiroki",
    name: "Tsukuda Hiroki",
    nameJa: "佃弘樹",
    mediumEn: "Drawing, digital collage",
    mediumJa: "ドローイング、デジタルコラージュ",
    bioEn:
      "Based in Hokkaido. Graduated from the imaging arts department of Musashino Art University in 2001. Working in charcoal, acrylic ink and coloured pencil, he builds turbulent, futuristic cityscapes of extraordinary density. Represented by NANZUKA in Tokyo and Petzel in New York, with solo shows including the Museum of Modern Art Gunma.",
    bioJa:
      "北海道在住。2001年武蔵野美術大学映像学科卒業。木炭、アクリルインク、色鉛筆を用い、荒々しい近未来都市を圧倒的な密度で描き出す。東京のNANZUKA、ニューヨークのPetzel所属。群馬県立近代美術館などで個展を開催。",
    instagram: "https://www.instagram.com/hirokitsukuda/",
    website: "https://nanzuka.com/en/artists/hiroki-tsukuda",
    photos: photos("tsukuda-hiroki", 3),
  },
  {
    slug: "koike-kensuke",
    name: "Koike Kensuke",
    nameJa: "小池健輔",
    mediumEn: "Conceptual art, photography manipulation",
    mediumJa: "コンセプチュアルアート、写真の再構成",
    bioEn:
      "Studied at the Accademia di Belle Arti in Venice from 1999 and at IUAV University's faculty of arts and design until 2007. He cuts, folds and rearranges found photographs to make new images using nothing but what is already in the original — a rule he holds to strictly. His work is held by LACMA and the Victoria and Albert Museum.",
    bioJa:
      "1999年よりヴェネツィアのアカデミア美術学院、2004年から2007年までヴェネツィア建築大学（IUAV）芸術デザイン学部に学ぶ。見出した古写真を切り、折り、並べ替えることで、元の一枚に含まれる要素だけを使って新しい像を立ち上げる。何も足さず、何も引かないという規則を厳格に守り続けている。ロサンゼルス郡立美術館（LACMA）、ヴィクトリア&アルバート博物館などに作品が収蔵されている。",
    instagram: "https://www.instagram.com/kensukekoike/",
    website: "https://www.kensukekoike.com/",
    photos: photos("koike-kensuke", 3),
  },
  {
    slug: "honjo-naoki",
    name: "Honjo Naoki",
    nameJa: "本城直季",
    mediumEn: "Photography",
    mediumJa: "写真",
    bioEn:
      "Graduated in photography from Tokyo Polytechnic University in 2002 and completed a master's in media art there in 2004. Using a large-format camera's tilt movements, he photographs real cities and landscapes so that they read as miniature models. He won the Kimura Ihei Photography Award in 2006 for small planet.",
    bioJa:
      "2002年東京工芸大学芸術学部写真学科卒業、2004年同大学院芸術学研究科メディアアート専攻写真領域修了。大判カメラのアオリを用いて、実在する都市や風景を精巧な模型のように写し取る。2006年、〈small planet〉により木村伊兵衛写真賞を受賞。",
    instagram: "https://www.instagram.com/naoki.honjo/",
    website: "https://honjonaoki.com/",
    photos: photos("honjo-naoki", 3),
  },
  {
    slug: "midori",
    name: "M!DOR!",
    nameJa: "ミドリ",
    mediumEn: "Collage, graphic design, art direction",
    mediumJa: "コラージュ、グラフィックデザイン、アートディレクション",
    bioEn:
      "Based in Tokyo. Studied editorial design at Bunka Women's University and spent five years at a design firm before going independent in 2010. Works chiefly in hand-collage, cutting original source material from magazines and ephemera of the 1800s to the 1950s into surreal, maximalist compositions, alongside commercial work in art direction, book covers, packaging and animation for fashion, music and publishing clients.",
    bioJa:
      "東京都在住。文化女子大学で編集デザインを学び、デザイン事務所勤務を5年間経て2010年に独立。1800年代から1950年代の雑誌や紙もののオリジナル素材を切り抜く手作業のコラージュを軸に、シュールでマキシマルな画面を構成する。あわせて、ファッション、音楽、出版、ラグジュアリーブランドの分野で、アートディレクション、装丁、パッケージ、アニメーション、映像も手掛ける。",
    instagram: "https://www.instagram.com/dorimiiiiiii/",
    website: "https://www.dorimiii.com/",
    photos: photos("midori", 3),
  },
  {
    slug: "kago-shintaro",
    name: "Kago Shintaro",
    nameJa: "駕籠真太郎",
    mediumEn: "Manga, illustration",
    mediumJa: "漫画、イラストレーション",
    bioEn:
      "Debuted in COMIC BOX in 1988. Describing himself as a kisō (fantastic) manga artist, he works through the grotesque, the bizarre and the surgically absurd, but structures it as science fiction, metafiction and black comedy — meticulous draughtsmanship applied to the systematic dismantling of genre. Won the 3rd Sekai Baka Mystery Award in 2010 for Fraction.",
    bioJa:
      "1988年『コミックボックス』にてデビュー。自ら「奇想漫画家」と称し、グロテスク、猟奇、人体改造といった主題を扱いながら、それをSFやメタフィクション、ブラックユーモアとして構築する。緻密な描線によってジャンルの約束事そのものを解体してみせる。2010年『フラクション』で第3回世界バカミス☆アワード受賞。",
    instagram: "https://www.instagram.com/shintarokago1969/",
    website: "https://themansionpress.com/collections/shintaro-kago",
    photos: photos("kago-shintaro", 3),
  },
  {
    slug: "matsuda-kouichi",
    name: "Matsuda Kouichi",
    nameJa: "松田光市",
    mediumEn: "3D / digital art",
    mediumJa: "3D／デジタルアート",
    bioEn:
      "Digital artist working in hyperdetailed, surreal 3D, fusing architecture, the body and technology into uncanny near-future visions. Instagram is the primary platform for his work.",
    bioJa:
      "建築、身体、テクノロジーを溶け合わせ、不気味な近未来像を描き出す超緻密なシュールレアリスティック3D作品で知られるデジタルアーティスト。主な発表の場は Instagram。",
    instagram: "https://www.instagram.com/kouichi_matsuda_/",
    photos: photos("matsuda-kouichi", 3),
  },
  {
    slug: "hamaguchi-ken",
    name: "Hamaguchi Ken",
    nameJa: "濱口健",
    mediumEn: "Painting",
    mediumJa: "絵画",
    bioEn:
      "Graduated in Japanese painting from Tama Art University in 1997. He worked primarily as an illustrator before debuting as a fine artist in 2008 with the solo show Black, Sutras and Other Things at Takahashi Collection Kagurazaka. His paintings carry a Showa-era nostalgia, mixing musicians, idols, yakuza and pop-culture imagery.",
    bioJa:
      "1997年多摩美術大学日本画専攻卒業。イラストレーションを中心に活動したのち、2008年の個展「黒、経文、その他」（高橋コレクション神楽坂）で美術作家としてデビュー。昭和のノスタルジーを漂わせる画風で、ミュージシャン、アイドル、任侠、ポップカルチャーのイメージを混淆させる。",
    instagram: "https://www.instagram.com/hamaguchi_painter_jp/",
    website: "https://khpainterjp.base.shop/",
    photos: photos("hamaguchi-ken", 3),
  },
  {
    slug: "sekitani-norihiro",
    name: "Sekitani Norihiro",
    nameJa: "関谷則仁",
    mediumEn: "Mixed media, illustration",
    mediumJa: "ミクストメディア、イラストレーション",
    bioEn:
      "Multidisciplinary artist known for intricate, detailed figurative work in a visual language that mixes dark fantasy, urban life and pop-culture reference.",
    bioJa:
      "ダークファンタジー、都市の生活、ポップカルチャーへの参照が入り混じる独自の視覚言語で、緻密な具象作品を制作する多分野横断型のアーティスト。",
    instagram: "https://www.instagram.com/sekintani/",
    photos: photos("sekitani-norihiro", 3),
  },
  {
    slug: "morimura-yasumasa",
    name: "Morimura Yasumasa",
    nameJa: "森村泰昌",
    mediumEn: "Photography, performance, self-portraiture",
    mediumJa: "写真、パフォーマンス、セルフポートレート",
    bioEn:
      "For more than three decades he has used costume, props, make-up and digital manipulation to transform himself into figures from Western art history and popular culture — inserting his own face into Van Gogh, Manet, Velázquez and Kahlo. The work questions the viewer's assumptions about those subjects while reflecting on Japan's complicated absorption of Western culture. Represented by Luhring Augustine, New York.",
    bioJa:
      "30年以上にわたり、衣装、小道具、メイク、デジタル処理によって自らを西洋美術史や大衆文化の登場人物へと変身させてきた。ゴッホ、マネ、ベラスケス、カーロの絵画に自身の顔を重ねる一連の作品は、鑑賞者がその主題に対して抱く前提を揺さぶると同時に、日本による西洋文化の複雑な受容を問い直す。Luhring Augustine（ニューヨーク）所属。",
    instagram: "https://www.instagram.com/yasumasamorimura/",
    website: "https://www.luhringaugustine.com/artists/yasumasa-morimura",
    photos: photos("morimura-yasumasa", 3),
  },
  {
    slug: "hajime-kinoko",
    name: "Hajime Kinoko",
    nameJa: "一鬼のこ",
    mediumEn: "Rope art (shibari / kinbaku), performance, photography",
    mediumJa: "縄アート（緊縛・縛り）、パフォーマンス、写真",
    bioEn:
      "A rope artist who takes shibari out of a purely erotic frame and treats it as sculpture and installation — binding not only people but trees, rocks and entire spaces. His signature Red series takes connection as its theme: ties to ancestors, to nature, to companions, to DNA. He also shoots and directs his own photography and video, and has performed and taught in Paris, London, Rome, Berlin, Sydney, New York, Taipei, Shanghai and beyond.",
    bioJa:
      "緊縛をエロティシズムの枠から解き放ち、彫刻やインスタレーションとして扱う縄師・ロープアーティスト。人だけでなく、樹木や岩、空間そのものをも縛る。代表作〈Red〉シリーズのテーマは「つながり」——先祖、自然、仲間、DNA、未来、そして心と心の結びつき。パフォーマンスにとどまらず、写真・映像作品では縛り、撮影、演出のすべてを自ら手掛ける。パリ、ロンドン、ローマ、ベルリン、シドニー、ニューヨーク、台北、上海など各都市で公演とワークショップを行っている。",
    instagram: "https://www.instagram.com/hajime_shibari/",
    website: "https://shibari.jp/",
    photos: photos("hajime-kinoko", 3),
  },
];
