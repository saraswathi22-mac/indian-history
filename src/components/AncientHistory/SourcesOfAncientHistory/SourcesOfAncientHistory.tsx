import React, { useState } from "react";
import Container from "../../../common/Container/Container";
import { Heading } from "../../../common/Headings/Headings";
import "./SourcesOfAncientHistory.css";

const data = [
  {
    id: 1,
    tabTitle: "Scriptures",
  },
  {
    id: 2,
    tabTitle: "Historical Texts",
  },
  {
    id: 3,
    tabTitle: "Details of foreigners",
  },
  {
    id: 4,
    tabTitle: "Archaeological evidence",
  },
];

const SourcesOfAncientHistory = () => {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  return (
    <Container>
      <Heading heading="Sources of Ancient India" />
      <div className="tabs">
        <ul className="tabs-titles">{listTitles}</ul>
        <div className="tab-content">
          {data.map((item) => (
            <p style={visibleTab === item.id ? {} : { display: "none" }}>
              {item.id === 1 && (
                <div className="ancient-content">
                  <h4>
                    Veda: is the oldest scripture of India. Its compiler
                    Maharshi Krishna Dwaipayana Vedavyas{" "}
                  </h4>
                  <h4>4 vedas</h4>
                  <h5>1. Rigveda: Ayurveda</h5>
                  This is the most ancient Veda. It has 10 mandals, 1028 suktas,
                  10462 verses. The sage who recites the rithas of this veda is
                  called Hotru. The 3rd mandala of this veda composed by
                  Vishvamitra contains the famous Gayatri mantra dedicated to
                  sun god Savitri. Its 9th manadala mentions the deity SOm. The
                  source of imagination of the Chatushvarnya society is the
                  Purushasukta described in the 10th mandal. It has composed of
                  250 hymns for Indra and 200 for Agni.
                  <h5>2. YajurVeda: dhanur </h5>
                  The compilation of mantras for recitation and rules for
                  compliance at the time of sacrifice is called Yajurveda. The
                  reader of this veda is called Adhvaryu. This veda is both in
                  prose and verse. <h5>Samveda: gandarv veda</h5>
                  The collection of verses that can be sung is called Samveda.
                  its reader is called Udratri. It is called the father of
                  Indian music
                  <h5>Atharveda/Bushan veda: shilp veda</h5>
                  This veda was composed by the Atharva sage. In this veda,
                  there is description of mantra related to various topicslike
                  disease, prevention, tantra-mantra, witchcraft, curse,
                  vashikaran, blessing, praise, medicine, marriage, love,
                  rajkarma etc. It describes the thought, beliefs, superstitions
                  etc of ordinary human beings. In this the assembly and the
                  committee have been called two daughters of prajapati. Sub ved
                  of this is Shilp veda
                  <h4>Puranas</h4>
                  It provides the best serialized descriptions of Indian
                  historical stories. The auther of this is considered Lomharsha
                  or his son Ugarshrawa. Their no is 18 out of which only 5
                  puranas: Matsya, Vayu, brahmin, bhagavata puranas have
                  genealogy of kings. Among these, Matsya puran is the most
                  ancient and authentic. Vishnu puran belongs to maurya dynasty.
                  Matsy belongs to Andhra Satavahana dynasty. Vayu to gupta
                  dynasty
                  <h4>Smritigranth</h4>
                  1. Manusmriti: Most ancient and authentic manusmriti is
                  considered in the epics. This is the standard text of sunga
                  period. 2. Narada smriti: Provides info abt Gupta era.
                  <h5>Epics</h5>
                  1. Ramayan: Creater is valmiki rishi. 1&2nd century of
                  creation time. There are 12000 verses initially in Ramayan and
                  abt 24000 at present. Valimik ramayan is divided into 7
                  sections-balkand, ayodhya kand, aranyakand, kishkindhanda,
                  sundarakanda, yudhkaand, uttarkand. The social, political and
                  religious location of the tine is revealed in Ramayan. The
                  texts based on Ramkatha were first translated out of India
                  into China. Bhushundi ramayan is known as adi ramayan 2.
                  Mahabharata: createe maharshi ved vyas. Initially it was 24000
                  verses. currently there are abt 1L verses. Mahabharat is also
                  called as Jai samhita. Maha is divided into 18 festivals. The
                  social, political and religious location of the tine is
                  revealed in Mahabharata
                  <h4>
                    Bhuddism: The tripatak , compiled in the musicals held after
                    the Parinirvana of Mahatma budh, is probably the oldest
                    religious book in India. Acc to scholar, the literal meaning
                    of Tripataka is 'basket'. The no of Tripatakas is 3:
                    Sutpitaka(S), vinaypitaka(V), abhidhamma pitaka(A). S
                    conatinss a collection of religious thoughts and teachings
                    of Lord Budha. It is considered to be the largest and the
                    best among Pitakas. In V, rules related to the discipline of
                    the Math residents are gn. Budhist beliefs have been
                    philosophically interpreted in A. Apart from pitaka,
                    milindapanho, deepavansh and mahavansh are also budhist
                    literature. Budist literature has been composed mainly in
                    pali language. In Jataka, there is a description of the
                    story of lord budhas previous birth
                  </h4>
                  <h4>
                    Jainism: The early history of Jainism is known from the
                    Kalpasutra. Jain literature is called Agam. The language of
                    this literature is Sanskrit and Pakrit. It is believed that
                    these Agama texts have been composed after the death of Lord
                    Mahavir swami.
                  </h4>
                  <h4>
                    Chanakya: The author of Arthashastra is Chanakya(Kautilya or
                    Vishnugupta). In this info, abt mauryan history is obtained
                  </h4>
                </div>
              )}
              {item.id === 2 && (
                <div className="ancient-content">
                  <h4>
                    Kalhana: The 1st attempt to write historical events in
                    sanskrit literature was done by kalhan. The book
                    rajatarangini was composed by Kalhan, which is related to
                    the history of Kashmir.{" "}
                  </h4>
                  <h4>
                    Panini: is the author of 1st book of Sanskrit language
                    grammar - Ashtadhyayi. In this book, info abt the history of
                    Maurya and the political age of Mauryan is received
                  </h4>
                  <h4>
                    Katyayan: The gargi-samhita was written by Katyayan, an
                    astrological treastise, yet it mentions the Yavana invasion
                    of India.{" "}
                  </h4>
                  <h4>
                    Patanjali: was the priest of Pushyamitra Sunga. The history
                    of the Sungas is revealed by his greatness.
                  </h4>
                </div>
              )}
              {item.id === 3 && (
                <div className="ancient-content">
                  <h4>Foreigners</h4>
                  <h4>
                    1. Herodotus: It is called the father of history. In the
                    book, Historica, he has described the relation of
                    Indo-Persia of 5th BC.
                  </h4>
                  <h4>
                    2. Megasthene: It was the ambassador of Seleucus Nicator,
                    who came to court of Chandragupta maurya. Is has written abt
                    the Maurya era society and culture in the book Indika.
                  </h4>
                  <h4>
                    Dimecus: This egyptian king was the ambassador of Ptolemy
                    Philadelphia, whi came to the court of Ashoka.{" "}
                  </h4>
                  <h4>
                    4. Ptolemy: It wrote a book called Geography of India int
                    the 2nd centuary.
                  </h4>
                  <h4>
                    Pliny: It wrote a book called Natural History in the 1st
                    century
                  </h4>
                  <h4>
                    Hiuen Tsang: This chineese traveler came to India during the
                    reign of Harshvardana. Its travelogue is famous by the name
                    of si-u-ki, which gives details of 138 countries. It
                    departed from China fro India and first reachhed the iNDIAN
                    STATE OF kApisha. He came to study at Nalanda university in
                    Nalanda district Bihar and collected Buddist texts from
                    India.{" "}
                  </h4>
                  <h1>
                    Fahian: Teh chineese traveller came to court of Gupta king
                    Chandragupta II.
                  </h1>
                  <h4>
                    Alberuni: He came to India with the Arabic traveller Mahmud
                    Ghaznavi. The name of this book written in arabic is
                    Kitab-ul-Hind or Tehkiq-e-Hind(Invention of India)
                  </h4>
                  <h4>
                    Ibn Battula: The travelogue written by him in arabic
                    lanaguage is called Rihrla. On reaching Delhi, Muhammad bin
                    Tughluq appointed it as the Qazi or judge of India.
                  </h4>
                  <h4>
                    Taranath: It was a tibetian writter. He composed a book
                    called Kangyur and Tangyur
                  </h4>
                  <h4>
                    Marcopolo: It came at the end of 3th century on a visit to
                    the Pandya country.
                  </h4>
                </div>
              )}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SourcesOfAncientHistory;
