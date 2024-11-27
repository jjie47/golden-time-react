// 시/도
export const sido = ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원특별자치도", "충청북도", "충청남도", "전북특별자치도", "전라남도", "경상북도", "경상남도", "제주특별자치도"];

// 시/군/구
export const gangwon = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
export const gyeonggi = ["고양시","고양시 덕양구","고양시 일산동구","고양시 일산서구","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","부천시 원미구","부천시 소사구","부천시 오정구","성남시","성남시 수정구","성남시 중원구","성남시 분당구","수원시","수원시 장안구","수원시 권선구","수원시 팔달구","수원시 영통구","시흥시","안산시","안산시 상록구","안산시 단원구","안성시","안양시","안양시 만안구","안양시 동안구","양주시","오산시","용인시","용인시 처인구","용인시 기흥구","용인시 수지구","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
export const gyeongsangnam = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
export const gyeongsangbuk = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
export const gwangju = ["광산구", "남구", "동구", "북구", "서구"];
export const daegu = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
export const daejeon = ["대덕구", "동구", "서구", "유성구", "중구"];
export const busan = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
export const seoul = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
export const ulsan = ["남구","동구","북구","중구","울주군"];
export const incheon = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
export const jeonnam = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
export const jeonbuk = ["군산시", "김제시", "남원시", "익산시", "전주시","전주시 완산구","전주시 덕진구", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
export const jeju = ["서귀포시","제주시","남제주군","북제주군"];
export const chungbuk = ["제천시","청주시","청주시 상당구","청주시 흥덕구","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
export const chungnam = ["계룡시", "공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "천안시", "홍성군","금산군", "부여군", "서천군", "예산군", "청양군", "태안군"];
export const sejong = ["세종특별자치시"];

export const regionMap = new Map([
    ['서울특별시', seoul],
    ['부산광역시', busan],
    ['대구광역시', daegu],
    ['인천광역시', incheon],
    ['광주광역시', gwangju],
    ['대전광역시', daejeon],
    ['울산광역시', ulsan],
    ['세종특별자치시', ['']],
    ['경기도', gyeonggi],
    ['강원특별자치도', gangwon],
    ['충청북도', chungbuk],
    ['충청남도', chungnam],
    ['전북특별자치도', jeonbuk],
    ['전라남도', jeonnam],
    ['경상북도', gyeongsangbuk],
    ['경상남도', gyeongsangnam],
    ['제주특별자치도', jeju]
]);

export const siDoCodes = new Map([
    ['서울특별시', 11],
    ['부산광역시', 26],
    ['대구광역시', 27],
    ['인천광역시', 28],
    ['광주광역시', 29],
    ['대전광역시', 30],
    ['울산광역시', 31],
    ['세종특별자치시', 36],
    ['경기도', 41],
    ['강원특별자치도', 42],
    ['충청북도', 43],
    ['충청남도', 44],
    ['전북특별자치도', 45],
    ['전라남도', 46],
    ['경상북도', 47],
    ['경상남도', 48],
    ['제주특별자치도', 50]
  ]);

  export const seoulCodes = new Map([
    ['종로구', 110],
    ['중구', 140],
    ['용산구', 170],
    ['성동구', 200],
    ['광진구', 215],
    ['동대문구', 230],
    ['중랑구', 260],
    ['성북구', 290],
    ['강북구', 305],
    ['도봉구', 320],
    ['노원구', 350],
    ['은평구', 380],
    ['서대문구', 410],
    ['마포구', 440],
    ['양천구', 470],
    ['강서구', 500],
    ['구로구', 530],
    ['금천구', 545],
    ['영등포구', 560],
    ['동작구', 590],
    ['관악구', 620],
    ['서초구', 650],
    ['강남구', 680],
    ['송파구', 710],
    ['강동구', 740]
  ]);
  export const busanCodes = new Map([
    ['중구', 110],
    ['서구', 140],
    ['동구', 170],
    ['영도구', 200],
    ['부산진구', 230],
    ['동래구', 260],
    ['남구', 290],
    ['북구', 320],
    ['해운대구', 350],
    ['사하구', 380],
    ['금정구', 410],
    ['강서구', 440],
    ['연제구', 470],
    ['수영구', 500],
    ['사상구', 530],
    ['기장군', 710]
  ]);
  export const daeguCodes = new Map([
    ['중구', 110],
    ['동구', 140],
    ['서구', 170],
    ['남구', 200],
    ['북구', 230],
    ['수성구', 260],
    ['달서구', 290],
    ['달성군', 710],
    ['군위군', 720]
  ]);
  export const incheonCodes = new Map([
    ['중구', 110],
    ['동구', 140],
    ['미추홀구', 177],
    ['연수구', 185],
    ['남동구', 200],
    ['부평구', 237],
    ['계양구', 245],
    ['서구', 260],
    ['강화군', 710],
    ['옹진군', 720]
  ]);
  export const gwangjuCodes = new Map([
    ['동구', 110],
    ['서구', 140],
    ['남구', 155],
    ['북구', 170],
    ['광산구', 200]
  ]);
  export const daejeonCodes = new Map([
    ['동구', 110],
    ['중구', 140],
    ['서구', 170],
    ['유성구', 200],
    ['대덕구', 230]
  ]);
  export const ulsanCodes = new Map([
    ['중구', 110],
    ['남구', 140],
    ['동구', 170],
    ['북구', 200],
    ['울주군', 710]
  ]);
  export const sejongCodes = new Map([
    ['', 110]
  ]);
  export const gyeonggiCodes = new Map([
    ['수원시 장안구', 111],
    ['수원시 권선구', 113],
    ['수원시 팔달구', 115],
    ['수원시 영통구', 117],
    ['성남시 수정구', 131],
    ['성남시 중원구', 133],
    ['성남시 분당구', 135],
    ['의정부시', 150],
    ['안양시 만안구', 171],
    ['안양시 동안구', 173],
    ['부천시', 190],
    ['광명시', 210],
    ['평택시', 220],
    ['동두천시', 250],
    ['안산시 상록구', 271],
    ['안산시 단원구', 273],
    ['고양시 덕양구', 281],
    ['고양시 일산동구', 285],
    ['고양시 일산서구', 287],
    ['과천시', 290],
    ['구리시', 310],
    ['남양주시', 360],
    ['오산시', 370],
    ['시흥시', 390],
    ['군포시', 410],
    ['의왕시', 430],
    ['하남시', 450],
    ['용인시 처인구', 461],
    ['용인시 기흥구', 463],
    ['용인시 수지구', 465],
    ['파주시', 480],
    ['이천시', 500],	
    ['안성시', 550],	
    ['김포시', 570],	
    ['화성시', 590],	
    ['광주시', 610],	
    ['양주시', 630],	
    ['포천시', 650],	
    ['여주시', 670],	
    ['연천군', 800],	
    ['가평군', 820],	
    ['양평군', 830]
  ]);
  export const chungbukCodes = new Map([
    ['청주시 상당구', 111],
    ['청주시 서원구', 112],
    ['청주시 흥덕구', 113],
    ['청주시 청원구', 114],
    ['충주시', 130],
    ['제천시', 150],
    ['보은군', 720],
    ['옥천군', 730],
    ['영동군', 740],
    ['증평군', 745],
    ['진천군', 750],
    ['괴산군', 760],
    ['음성군', 770],
    ['단양군', 800],
  ]);
  export const chungnamCodes = new Map([
    ['천안시 동남구', 131],
    ['천안시 서북구', 133],
    ['공주시', 150],
    ['보령시', 180],
    ['아산시', 200],
    ['서산시', 210],
    ['논산시', 230],
    ['계룡시', 250],
    ['당진시', 270],
    ['금산군', 710],
    ['부여군', 760],
    ['서천군', 770],
    ['청양군', 790],
    ['홍성군', 800],
    ['예산군', 810],
    ['태안군', 825],
  ]);
  export const jeonbukCodes = new Map([
    ['전주시 완산구', 111],
    ['전주시 덕진구', 113],
    ['군산시', 130],
    ['익산시', 140],
    ['정읍시', 180],
    ['남원시', 190],
    ['김제시', 210],
    ['완주군', 710],
    ['진안군', 720],
    ['무주군', 730],
    ['장수군', 740],
    ['임실군', 750],
    ['순창군', 770],
    ['고창군', 790],
    ['부안군', 800],
  ]);
  export const jeonnamCodes = new Map([
    ['목포시', 110],
    ['여수시', 130],
    ['순천시', 150],
    ['나주시', 170],
    ['광양시', 230],
    ['담양군', 710],
    ['곡성군', 720],
    ['구례군', 730],
    ['고흥군', 770],
    ['보성군', 780],
    ['화순군', 790],
    ['장흥군', 800],
    ['강진군', 810],
    ['해남군', 820],
    ['영암군', 830],
    ['무안군', 840],
    ['함평군', 860],
    ['영광군', 870],
    ['장성군', 880],
    ['완도군', 890],
    ['진도군', 900],
    ['신안군', 910],
  ]);
  export const gyeongsangbukCodes = new Map([
    ['포항시 남구', 111],
    ['포항시 북구', 113],
    ['경주시', 130],
    ['김천시', 150],
    ['안동시', 170],
    ['구미시', 190],
    ['영주시', 210],
    ['영천시', 230],
    ['상주시', 250],
    ['문경시', 280],
    ['경산시', 290],
    ['의성군', 730],
    ['청송군', 750],
    ['영양군', 760],
    ['영덕군', 770],
    ['청도군', 820],
    ['고령군', 830],
    ['성주군', 840],
    ['칠곡군', 850],
    ['예천군', 900],
    ['봉화군', 920],
    ['울진군', 930],
    ['울릉군', 940],
  ]);
  export const gyeongsangnamCodes = new Map([
    ['창원시 의창구', 121],
    ['창원시 성산구', 123],
    ['창원시 마산합포구', 125],
    ['창원시 마산회원구', 127],
    ['창원시 진해구', 129],
    ['진주시', 170],
    ['통영시', 220],
    ['사천시', 240],
    ['김해시', 250],
    ['밀양시', 270],
    ['거제시', 310],
    ['양산시', 330],
    ['의령군', 720],
    ['함안군', 730],
    ['창녕군', 740],
    ['고성군', 820],
    ['남해군', 840],
    ['하동군', 850],
    ['산청군', 860],
    ['함양군', 870],
    ['거창군', 880],
    ['합천군', 890],
  ]);
  export const jejuCodes = new Map([
    ['제주시', 110],
    ['서귀포시', 130]
  ]);
  export const gangwonCodes = new Map([
    ['춘천시', 110],
    ['원주시', 130],
    ['강릉시', 150],
    ['동해시', 170],
    ['태백시', 190],
    ['속초시', 210],
    ['삼척시', 230],
    ['홍천군', 720],
    ['횡성군', 730],
    ['영월군', 750],
    ['평창군', 760],
    ['정선군', 770],
    ['철원군', 780],
    ['화천군', 790],
    ['양구군', 800],
    ['인제군', 810],
    ['고성군', 820],
    ['양양군', 830],
  ]);

  
  export const sigunguCodes = new Map([
    [11, seoulCodes],
    [26, busanCodes],
    [27, daeguCodes],
    [28, incheonCodes],
    [29, gwangjuCodes],
    [30, daejeonCodes],
    [31, ulsanCodes],
    [36, sejongCodes],
    [41, gyeonggiCodes],
    [42, gangwonCodes],
    [43, chungbukCodes],
    [44, chungnamCodes],
    [45, jeonbukCodes],
    [46, jeonnamCodes],
    [47, gyeongsangbukCodes],
    [48, gyeongsangnamCodes],
    [50, jejuCodes],
  ])