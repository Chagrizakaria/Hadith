import { useState } from 'react'
import copy from './assets/copy.svg'
import trans from './assets/translate.svg'
import copiertext from './assets/images/wondicon-ui-free-file_111223.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  const [countindex, setCountindex] = useState(0);
  const [translate, setTranslate] = useState(true);
  const toggleParagraph = () => {
    setTranslate(!translate);
  };

  const Ahadith = [
    {
      hadith: "قال الرّسول صلّى الله عليه وسلّم: من كانتِ الآخرةُ هَمَّهُ جعلَ اللَّهُ غناهُ في قلبِهِ وجمعَ لَه شملَهُ وأتتهُ الدُّنيا وَهيَ راغمة، ومن كانتِ الدُّنيا همَّهُ جعلَ اللَّهُ فقرَهُ بينَ عينيهِ وفرَّقَ عليهِ شملَهُ، ولم يأتِهِ منَ الدُّنيا إلَّا ما قُدِّرَ لَهُ",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever makes the Hereafter his goal, Allah makes his heart rich, brings his affairs in order, and the world comes to him despite being reluctant. Whoever makes the world his goal, Allah puts poverty before his eyes, disarranges his affairs, and nothing of the world comes to him except what was already destined for him.'"
      , category: "الدنيا", transcategory: "Life"

    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: لو كانتِ الدُّنيا تعدلُ عندَ اللهِ جناحَ بعوضةٍ ما سقى كافرًا منها شربةَ ماء ",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'If the world were to be worth even a wing of a mosquito in the sight of Allah, He would not allow a disbeliever to have a sip of water from it.'"
      , category: "الدنيا", transcategory: "Life"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (لا تَمُوتُ نفسٌ حتى تَستَكمِلَ رِزْقَها وعُمرَها).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'No soul shall die until it completes its provision and its appointed term of life.'"
      , category: "الدنيا",
      transcategory: "Life"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (لَا يُؤْمِنُ أحَدُكُمْ، حتَّى يُحِبَّ لأخِيهِ ما يُحِبُّ لِنَفْسِهِ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'None of you truly believes until he loves for his brother what he loves for himself.'"
      , category: "الحب", transcategory: "Love"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-:(لا تَدْخُلُونَ الجَنَّةَ حتَّى تُؤْمِنُوا، ولا تُؤْمِنُوا حتَّى تَحابُّوا، أوَلا أدُلُّكُمْ علَى شيءٍ إذا فَعَلْتُمُوهُ تَحابَبْتُمْ؟ أفْشُوا السَّلامَ بيْنَكُمْ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I not guide you to something, if you do it, you will love one another? Spread peace among yourselves.'"
      , category: "الحب", transcategory: "Love"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-:(إذا أحبَّ الرجلُ أخاه فلْيخبره أنّه يحبُّه).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'When a man loves his brother, he should inform him that he loves him.'"
      , category: "الحب", transcategory: "Love"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-:(لا يُؤْمِنُ أحدُكم حتى أكونَ أحبَّ إليه من ولدِهِ، ووالدِهِ، والناسِ أجمعينَ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'None of you believes until I am more beloved to him than his children, his father, and all of mankind.'"
      , category: "الحب", transcategory: "Love"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (من أُعطِيَ حظَّهُ من الرِّفقِ فقد أُعطِيَ حظَّهُ من الخيرِ ومن حُرِّمَ حظُّهُ من الرِّفقِ ؛ فقد حُرِمَ حظُّهُ من الخيرِ . أثقلٌ شيءٍ في ميزانِ المؤمِنِ يومَ القيامةِ حُسنُ الخُلُقِ ، وإنَّ اللهَ لَيبغضُ الفاحشَ البذِيءَ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever is given his share of gentleness, he has been given his share of goodness. Whoever is deprived of his share of gentleness, he has been deprived of his share of goodness. Nothing is heavier on the scale of a believer on the Day of Judgment than good character. Indeed, Allah hates the shameless, obscene person.'"
      , category: "الأخلاق", transcategory: "Manners"
    },
    {
      hadith: "قال الرسول -صلّى الله عليه وسلّم-: (إنَّ صاحبَ حُسنِ الخلقِ ليبلُغُ بِهِ درجةَ صاحبِ الصَّومِ والصَّلاةِ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Verily, the one with good character will have the same rank as the one who fasts and prays.'"
      , category: "الأخلاق", transcategory: "Manners"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (إنَّ مِن أحبِّكم إليَّ وأقربِكُم منِّي مجلسًا يومَ القيامةِ أحاسنَكُم أخلاقًا، وإنَّ مِن أبغضِكُم إليَّ وأبعدِكُم منِّي يومَ القيامةِ الثَّرثارونَ والمتشدِّقونَ والمتفَيهِقونَ. قالوا: يا رسولَ اللَّهِ، قد علِمنا الثَّرثارينَ والمتشدِّقينَ، فما المتفَيهقونَ؟ قالَ: المتَكَبِّرونَ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'The one most beloved to me and the nearest to me in sitting on the Day of Resurrection is the one with the best character. And verily, the most disliked of you to me and the farthest of you from me on the Day of Resurrection are the prattlers, the arrogant, and the showy.'"
      , category: "الأخلاق", transcategory: "Manners"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (مَن كانَ يُؤْمِنُ باللَّهِ واليَومِ الآخِرِ فَلْيَقُولْ خَيْرًا أوْ لِيَصْمُتْ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.'"
      , category: "الأخلاق", transcategory: "Manners"

    }
    ,
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (من أُعطِيَ حظَّهُ من الرِّفقِ فقد أُعطِيَ حظَّهُ من الخيرِ، ومن حُرِّمَ حظُّهُ من الرِّفقِ فقد حُرِّمَ حظُّهُ من الخيرِ. وما لا يُجاوِزُ الرِّفقَ لا يُجاوِزُ الخيرَ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever is given his share of kindness has been given his share of goodness, and whoever is deprived of his share of kindness has been deprived of his share of goodness. And what does not reach the level of kindness does not reach the level of goodness.'",
      category: "الرفق",
      transcategory: "Kindness"
    },
    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (من لا يَرْحَم النَّاسَ لا يَرْحَمهُ اللهُ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever does not show mercy to the people, Allah will not show mercy to him.'",
      category: "الرحمة",
      transcategory: "Mercy"
    },

    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (العهد الذي بيننا وبينهم الصَّلاةُ، فمن ترَكَها فقد كفَر).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'The covenant between us and them is the prayer. Whoever leaves it has disbelieved.'",
      category: "الصلاة",
      transcategory: "Prayer"
    },


    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (لا تَباعَ الذّهبُ بالذّهبِ إلا بِوَزْنٍ أو وزنٍ مثله، ولا تباعُ الفِضَّةُ بالفِضَّةِ إلا بِوَزْنٍ أو وزنٍ مثله. فمن زادَ أو اعتَدَّ فقد آثَمَ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Do not sell gold for gold unless equivalent in weight, and do not sell silver for silver unless equivalent in weight. Whoever exceeds the limits or asks for more has engaged in usury.'",
      category: "التجارة",
      transcategory: "Trade",
    },

    {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (لا يستَيقِظُ أحدُكم مِنَ اللَّيْلِ فَيَتَوَضَّأَ، ثم يقولُ: لا إلهَ إلَّا اللهُ، وحدَّهُ لا شَرِيكَ لَهُ، وأشْهَدُ أنَّ محَمَّدًا عبدُهُ ورسولُهُ، ثم يقولُ: اللَّهُمَّ اغْفِرْ لي، أو دَعَا دعْوَةً فإنَّهُ إذا افتَتَحَ بها وقَعَتِ الدُّعاءُ بينَ السَّماءِ والأرضِ) فقال الرّسولُ -صلّى اللهُ عليهِ وسلّم-: (رَبُّ اغْفِرْ لهُ، رَبُّ اغْفِرْ لهُ)).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'No one of you wakes up in the night and performs ablution, then says: There is no god but Allah, alone, without partner. He has dominion, and to Him belongs all praise. He lives and dies, and He is over all things competent. Then say: O Allah, forgive me, or makes a supplication, except that it will be answered, provided he does not seek something sinful or the breaking of family ties.'"
      , category: "الدعاء", transcategory: "Supplication"
    },

    {
      hadith: "عجبًا لأمر المؤمن، إن أمره كله خير، وليس ذاك لأحد إلا للمؤمن، إن أصابته سراء شكر، فكان خيرًا له، وإن أصابته ضراء، صبر فكان خيرًا له",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Wonderful is the affair of the believer, for his affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it, and that is good for him. If something bad happens to him, he bears it with patience, and that is good for him.'",
      category: "الإيمان",
      transcategory: "Faith"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (عَجَبًا لأَمْرِ المُؤْمِنِ، إنَّ أمْرَهُ كُلَّهُ خَيْرٌ، وليسَ ذلكَ لأَحَدٍ إلَّا لِلْمُؤْمِنِ، إنْ أصابَتْهُ سَرَّاءُ شَكَرَ، فَكانَ خَيْرًا له، وإنْ أصابَتْهُ ضَرَّاءُ، صَبَرَ فَكانَ خَيْرًا له).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Wonderful is the affair of the believer, for his affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it, and that is good for him. If something bad happens to him, he bears it with patience, and that is good for him.'",
      category: "الصبر",
      transcategory: "Patience"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (ما يُصِيبُ المُؤْمِنَ مِن وصَبٍ، ولا نَصَبٍ، ولا سَقَمٍ، ولا حَزَنٍ حتَّى الهَمِّ يُهَمُّهُ، إلَّا كُفِّرَ به مِن سَيِّئاتِهِ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'No fatigue, illness, anxiety, sorrow, harm, or sadness afflicts any Muslim, even to the extent of a thorn pricking him, without Allah wiping out his sins.'",
      category: "الصبر",
      transcategory: "Patience"
    }
    , {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (مَن يَدْخُلُ الجَنَّةَ يَنْعَمُ لا يَبْأَسُ، لا تَبْلَى ثِيابُهُ ولا يَفْنَى شَبابُهُ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Whoever enters Paradise will enjoy a life of ease and will never suffer, his garments will not wear out, and his youth will not fade.'",
      category: "الجنة",
      transcategory: "Paradise"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم-: (إنَّ في الجنةِ لشجرةً يسيرُ الراكبُ في ظلّها مائةَ عامٍ لا يقطعُها واقرأوا إن شئتُم (وْظِلٍّ مَمْدُودٍ وَمَاءٍ مَسْكُوبٍ)).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'Indeed, in Paradise, there is a tree under the shade of which a rider could travel for a hundred years without cutting it. Read if you wish: 'In shade extended' and 'water poured forth.'",
      category: "الجنة",
      transcategory: "Paradise"
    }, {
      hadith: "قال الرّسول -صلّى الله عليه وسلّم- فيما رواه عن الله -تبارك وتعالى-: (إنَّ اللَّهَ تَبارَكَ وتَعالَى يقولُ لأهْلِ الجَنَّةِ: يا أهْلَ الجَنَّةِ، فيَقولونَ: لَبَّيْكَ، رَبَّنَا، وسَعْدَاكَ، فيَقولُ: هلْ رَأَيْتُمْ شَيئًا تُرِيدُونِ أزِيدُكُمْ؟ فيَقولونَ: ألَمْ تُبَيِّضْ وجُوهُنَا، وتُدْخِلْنَا الجَنَّةَ، وتُنَجِّنَا مِنَ النَّارِ؟ فيَكْشُفُ الْحِجَابَ، فَما أُعْطُوا شيئًا أحَبَّ إلَيْهِم مِّنَ النَّظَرِ إلَى رَبِّهِ عَزَّ وَجَلَّ).",
      transhadith: "The Messenger of Allah, peace and blessings be upon him, said: 'The Prophet, peace and blessings be upon him, said in what he narrated from Allah - blessed and exalted is He: 'Indeed, Allah, blessed and exalted is He, says to the people of Paradise: O people of Paradise! They respond: At Your service, our Lord, and well-being. He says: Have you seen anything that you want Me to increase for you? They say: Have You not brightened our faces, admitted us to Paradise, and saved us from the Fire? Then He removes the veil, and they are not given anything more beloved to them than looking at their Lord, Mighty and Majestic.'",
      category: "الجنة",
      transcategory: "Paradise"
    }
  ];


  console.log(countindex)


  function suivant() {

    if (countindex == Ahadith.length - 1) {
      setCountindex(0)

    } else {
      setCountindex(countindex + 1)
    }
    setTranslate(true)
  }

  console.log(countindex)
  function precedant() {

    if (countindex == 0) {
      setCountindex(Ahadith.length - 1)

    } else {
      setCountindex(countindex - 1)
    }
    setTranslate(true)

  }


  return (
    <>
      <div >

        <h1 className='fixed-top d-inline  back-title p-3  user-select-none  mt-2 text-white'  >The Hadith of the Prophet Muhammad</h1>




        <div className="cardhadith p-2 text-white rounded-5">
          <h3 className='text-dark'>{translate ? (Ahadith[countindex].category) : (Ahadith[countindex].transcategory)}</h3>
          <p className='user-select-none'>{translate ? (Ahadith[countindex].hadith) : (Ahadith[countindex].transhadith)}</p>
          <div className=' position-relative mt-2 '>
            <p className=" stick  bottom-0 start-0 p-1  user-select-none rounded-4 text-dark"> مُحَمَّدُُ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ</p>
            <img
              className='copier hover-scale bottom-0 end-0'
              onClick={() => navigator.clipboard.writeText(translate ? (Ahadith[countindex].hadith) : (Ahadith[countindex].transhadith))}
              src={copy}
              alt=""
              style={{ cursor: 'pointer' }}
            />
            <img
              className='copier hover-scale  bottom-0 end-0 m-3'
              onClick={() => toggleParagraph()} src={trans}
              alt=""
              style={{ cursor: 'pointer' }}
            />



          </div>



        </div>
        <div className='mt-4 fixed-bottom d-flex justify-content-around '>
          <button className='colorbackground  rounded-4 hover-scale text-white' onClick={() => suivant()}>التالي</button>
          <button className='colorbackground  rounded-4 hover-scale text-white' onClick={() => precedant()}>السابق</button>
        </div>

      </div>
    </>
  )
}

export default App
