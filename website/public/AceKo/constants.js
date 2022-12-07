// Options the user could type in
const prompts = [
  ["hi", "hey", "hello"],
  ["aceko developers", "developers", "aceko creator","who are your masters"],
  ["how are you","are you good","hows your day", "how is your day"],


  // Brief History
  /* 1 */["when was bicol university created", "bu creation", "creation"],
  /* 2 */["when was bicol university institutionalized", "bu institutionalization", "institutionalization"],
  /* 3 */["how many campuses are there", "campuses", "bu campuses", "bicol university campuses"],
  /* 4 */["who is the first bicol university president", "first bu president"],
  /* 5 */[
    "who is the current president of bicol university",
    "current bicol university president",
    "bicol university president",
    "bu current president",
    "bu president"
  ],
  /* 6 */["vision"],
  /* 7 */["mission"],
  /* 8 */["quality policy"],

  // Admission, Registration, and Related Matters
  /* 1 */["bucet", "bicol university college entrance test", "college entrance test", "entrance examinations",],
  /* 2 */["bucet general requirements", "entrance test general requirements", "general requirements", "okay", "nice"],
  /* 3 */["transfer students", "transferring", "transfer"],
  /* 4 */["transfer student requirements", "transfer requirements"],
  /* 5 */["shifter", "shift", "shifting"],
  /* 6 */["shifters documents", "how to shift", "shifting requirements"],
  /* 7 */["registration"],
  /* 8 */["transfer students assessment procedures", "transfer procedures", "transfer assessment"],
  /* 9 */["transfer credits", "credits"],
  /* 10 */["transfer credits consideration", "credits consideration"],
  /* 11 */["graduates of technical vocational courses", "technical vocational courses graduates", "techvoc"],
  /* 12 */["returning students"],
  /* 13 */["undergraduate foreign students general requirements", "foreign students general requirements","foreign students requirements"],
  /* 14 */["undergraduate foreign students high school graduate abroad","foreign students"],

  // University Governance
  /* 1 */["the governing board", "governing board"],
  /* 2 */["governing board policymaking body", "policymaking body"],
  /* 3 */["administrative council"],
  /* 4 */["academic council"],
  /* 5 */["the administration", "administration"],
  /* 6 */["representation of students in governing bodies", "students in governing bodies", "representation"],

  // Academic Policies, Procedures and Programs
  /* 1 */["the academic year", "academic year"],
  /* 2 */["prescribed uniform", "uniform"],
  /* 3 */["credit unit","credit"],
  /* 4 */["academic load"],
  /* 5 */["grading system","grades"],
  /* 6 */["classification of students", "classification"],
  /* 7 */["cross-registration", "cross registration"],
  /* 8 */["changing of subjects", "transferring to other classes"],
  /* 9 */["adding of subjects", "add of subjects"],
  /* 10 */["substitution of subjects", "substitution"],
  /* 11 */["dropping of subjects", "drop","drop subjects"],
  /* 12 */["withdrawal of registration", "withdrawal"],
  /* 13 */["prerequisite","prerequisites","prerequisite subjects"],
  /* 14 */["shifting from one course to another","shifting"],
  /* 15 */["attendance and absences in case of illness", "illness","absence due to illness"],
  /* 16 */["attendance and absences", "attendance", "absences"],
  /* 17 */["leave of abscences"],
  /* 18 */["academic probation"],
  /* 19 */["academic dismissal"],
  /* 20 */["honorable dismissal"],
  /* 21 */["dismissal","dismissed"],
  /* 22 */["permanent disqualification"],
  /* 23 */["policy statement on academic integrity", "academic integrity"],
  /* 24 */["maximum residence rule", "residence rule"],
  /* 25 */["enforcing a new curriculum", "new curriculum"],
  /* 26 */["examinations", "exam"],
  /* 27 */["validating examination", "validating exam"],
  /* 28 */["graduation requirements"],
  /* 29 */["non academic awards", "incentives"],
  /* 30 */["ladderized type program recognition"],
  /* 31 */["transcript", "diploma"],
  /* 32 */["opening of cost recovery courses", "cost recovery", "cost recovery courses"],

  // Financial Information
  /* 1 */["universal access to quality tertiary education act", "universal access"],
  /* 2 */["schedule of fees"],
  /* 3 */["mode of payment of school fees", "mode of payment"],
  /* 4 */["nature of payment of fees", "nature of payment"],
  /* 5 */["refunds"],

  //Student Affairs and Services
  /* 1 */["objectives of the osas","objective of osas","objective osas"],
  /* 2 */["services under the osas", "services osas","services under osas"],
  /* 3 */["university cultural groups", "cultural groups"],

  // Locations
  /* 1 */["available school canteen and eateries in bicol university", "canteen and eateries", "canteen", "eateries"],
  /* 2 */["bicol university admissions office", "office of the registrar", "registrar", "admissions office"],
  /* 3 */["bicol university health services", "health services", "bu health services"],
  /* 4 */["bicol university library", "bu library", "library"],
  /* 5 */["bicol university student union center building", "student union center", "bu student union center"],
  /* 6 */["bicol university administration building", "administration building"],
  /* 7 */["bicol university womens dorm", "bu womens dorm", "womens dorm"],
  /* 8 */["bicol university mens dorm", "bu mens dorm", "mens dorm"],

  // Scholarship
  /* 1 */["scholarship categories academic recognition", "scholarship academic recognition"],
  /* 2 */["scholarship categories academic distinction", "scholarship academic distinction"],

  // General Information
  /* 1 */["bicol university hymn", "hymn"],
  /* 2 */["bicol university uniform design", "uniform", "uniform design"],


  // Updates: Scientia Online
  /* 1 */["photos during piyesta siyentista", "piyesta siyentista"],
  /* 2 */["bonifacio day", "si bonifacio at ang pilipinas ngayon"],
  /* 3 */["total tally during science and technology fair", "science and technology fair"],
  /* 4 */["news update winners for science and technology ambassador and ambassadress", "winners for staa", "staa winners"],
  /* 5 */["transcriptions of the answers of staa candidates", "transcription"],
  /* 6 */["major awards during science and technology ambassador and ambassadress", "major awards at staa"],
  /* 7 */["dragqueen", "dragqueen champion", "drag queen"],
  /* 8 */["minor and corporate awards during staa", "minor and corporate"],
  /* 9 */["pre-determined awards for staa", "pre determined awards"],
  /* 10 */["news flash november twenty nine"],
  /* 11 */["piyesta siyentista booths"],
  /* 12 */['news flash november twenty eight'],
  /* 13 */["opening program for science and tecnology fair", "opening program"],
  /* 14 */["preparations for science and technology fair"],
  /* 15 */["pms talk", "meet the met"],
  /* 16 */["just in november five"],
  /* 17 */["mmbu top sixteen"],
  /* 18 */["mmbu second runners up"],
  /* 19 */["mmbu third runners up"],
  /* 20 */["mmbu first runners up"],
  /* 21 */["mmbu champion", "mr and ms bicol university"],
  /* 22 */["breaking news november five", "bucet investigation", "circulating photos of bucet"],

  // Updates: The Bicol Universitarian
  /* 1 */["christmas update", "december first update"],
  /* 2 */["bicol university nursing board passers", "nursing board passers", "nursing passers"],
  /* 3 */["search for the next bicol university president", "next bu president"],
  /* 4 */["bicol university civil engineering board passers", "ce board passers", "civil engineering passers", "civil engineering board passers", "ce passers"],
  /* 5 */["rcess", "regional civil engineering students summit"],
  /* 6 */["pista ng agham at teknolohiya", "college of science pista ng agham at teknolohiya", "cs fest"],
  /* 7 */["thirteenth maguindanao massacre commemoration", "maguindanao massacre commemoration"],
  /* 8 */["rcess incident", "rcess student incident"],
  /* 9 */["pista ng mapa", "pista ng mapa celebration"],
  /* 10 */["daraga lights"],
  /* 11 */["christmas in bucal", "xmas in bucal", "bucal christmas"],

  // Updates: BU University Student Council
  ["usc fee remittances", "fee remittances", "usc remittances"],

  // Calendar of Activities
  /* 1 */["final examinations of graduating and non graduating students", "final examination"],
  /* 2 */["last day of classes of first semester for elementary and secondary", "last day of classes elementary and secondary"],
  /* 3 */["last day of classes of first semester for tertiary level", "last day of classes for college"],
  /* 4 */["semestral break for tertiary level", "semestral break for college"],
  /* 5 */["semestral break for elementary and secondary level", "semestral break for elemtary and secondary"],
  /* 6 */["resumption of classes for elementary high school and senior high school", "resumption of classes for elementary", "resumption of classes for high school", "resumption of classes for senior high school"],
  /* 7 */["general enrolment period for tertiary level", "enrolment college", "enrolment period for college level"],
  /* 8 */["start of classes for tertiary level", "start of classes"],
  /* 9 */["midterm examination for graduating students"],
  /* 10 */["midterm examination for non graduating students"],
  /* 11 */["final examination of graduating students","final exam of graduating students","final exam of graduating student"],
  /* 12 */["final examination of non graduating students","final exam of non graduating students","final exam of non graduating student"],
]

// Responses, in corresponding order

const replies = [
  ["Hello! I am AceKo your campus buddy!"],
  [
    "AceKo chatbot is developed by 5 Bicol University Students: Ainah, Karl, Felomino, Jimfred and Gabriel"
  ],
  ["I'm fine! How about you?"],
  
  // Brief History
  /* 1 */[
    "Bicol University was created on June 21, 1969, through the passage of Republic Act 5521."
  ],
  /* 2 */["Bicol University was institutionalized on September 22, 1970."],
  /* 3 */["Bicol University has a total of 7 campuses; Bicol University Main Campus, Bicol University Daraga campus, Bicol University East campus, Bicol University Gubat campus, Bicol University Polangui Campus, Bicol Univeristy Guinobatan Campus, and Bicol University Tabaco Campus."],
  /* 4 */["Dr. Ricardo A. Arcilla is the first Bicol University president."],
  /* 5 */["The current president of Bicol University is Dr. Arnulfo M. Mascarinas."],
  /* 6 */["A World-Class University Producing Leaders and Change Agents for Social Transformation and Development."],
  /* 7 */["The Bicol University shall give professional and technical training, and provide advanced and specialized instruction in literature, philosophy , the sciences and arts, besides providing for the promotion of scientific and technological researches."],
  /* 8 */["Bicol University commits to continually strive for excellence in Instruction, Research and Extension by meeting the highest level of clientele satisfaction and adhering to quality standards and applicable statuory and regulatory requirements."],

  // Admission, Registration and Related Matters
  /* 1 */["Incoming first year students are required to take the BUCET. It is a three-hour examination consisting of sub-tests in Language proficiency in English, Mathematics, Science and Reading Comprehension. Admission is based on the applicant's Bicol University College Entrance Test (BUCET) Composite Rating consisting of the BUCET score and his/her general weighted average (GWA) in the grade 9 to 11."],
  /* 2 */["1. Students from DEPed or other recognized high schools and are high school seniors expecting to graduate at the end of the school year; OR 2. Senior high school graduates who have not taken and/are not taking any college subject/s; AND 3. Holders of Philippines Educational Placement Test/ Alternative Learning System (PEPT/ALS) certificates who are eligible for admission to college."],
  /* 3 */["Admission of transferees is contigent upon the availability of slots in the College the applicants are seeking transfer to, upon which the Dean of the College shall declare the slot open or available upon the recommendation of the College Department Head of the program where said slot is available."],
  /* 4 */["1. Certification from the Dean/ Director of availability of place/slot in the College/Unit;2. Certification of grades duly signed by the Registrar of the original school bearing the school's seal; or3. Official transcript of records (OTR) from the last school attended; and 4. Certificate of honorable dismissal."],
  /* 5 */["Shifters are internal transferees from one course program to another within the University. They shall be allowed to shift subject for availability of place/slot in the college/unit they are seeking transfer to. They shall vie for the places/slot along with transferees from outside the University; hence, will be required to submit documents."],
  /* 6 */["1. Letter of intent to transfer specifying, among others, the reason for request for transfer; 2. Certification from the Dean/Director of the availability of slot; 3. Certification of grades duly signed by the College/ Unit Registrar."],
  /* 7 */["Qualified applicants for admission should register within the period of registration. Registration includes filling out the prescribed forms and paying the required fees. Students enrolled during the preceding semester including summer session are re-enrolled upon being cleared by the Dean and other officials concerned. No students shall be registered in any subject after the last day of late registrationin the school calendar. Registration without fine is allowed only to special students, but is subject to other regulationsof the University. A student must be officially registered in order to receive a credit for course work."],
  /* 8 */["1. Course-program aptitude test, if required by the College/ Unit/Department; 2. Grade point average (GPA) of 2.0 or 89%; 3. No failing grade in any courses taken 4. Applicant shall not have finished more than twenty-five(25%) of the units required for the course 5. Interview;and/or Other assessment procedure(s) required by the College/Unit/Department."],
  /* 9 */["Only course units earned from colleges/universities with the same program accreditationlevel as Bicol University or higher or those who are duly recognized by CHED will be credited. Transfer credits,however, shall not exceed twenty-five (25%) of the total number of units required for the course."],
  /* 10 */[". At the discretion of the College Dean, a validation examination may be required for subjects with ratings below 2.5 or its equivalent before credits are granted. 2. The courses or subjects for which the credits are claimed are in the opinion of the College Dean equivalent to the content coverage, or has the same curriculum offered in the college. 3. The number of units is the same as the units of the equivalent subject in Bicol University. 4. The rules on sequences of subjects (prerequisites) in the curriculum are observed. The students will not be allowed to enroll in a subject the prerequisites of which, taken elsewhere, have not been validated or repeated."],
  /* 11 */["Admission of graduates of terminal technical-vocational courses shall be assessed on a case-to-case basis. The documentary requirements and conditions set for transfer students shall apply to them."],
  /* 12 */["Old students who stopped schooling due to ill health or any other valid reason can seek re-admission by presenting medical or other documents his/her reason/s for dropping out of school. Renewal of registration of student is dependent on his/her previous performance. The college/unit reserves the right to refuse enrollment/ re-admission of old/returning student on account of proofs of his/her violation of the school's rules and regulations and/ or academic deficiency. As an old student may be re-admitted upon presentation of his/her clearance duly signed by school officials concerned; while student returning from leave of absence shall present supporting papers or documents."],
  /* 13 */["The general admission requirements for student-applicants from other nations in the Bicol University are the submission of the following: 1. Original Transcript of Records (OTR) 2.Personal Data 3. Affidavit of Support 4. Alien Certificate of Registration (ACR) 5. Results of Test on English as a Foreign Language (TOEFL) 6. Approved study permit from CHED 7. An application fee of $ 50.00"],
  /* 14 */["Student from other nations who have graduated from high schools abroad may be admitted to first year course in the University if they meet the following specific requirements: 1. Certification of completion of a secondary curriculum where the applicant had his/her secondary education. 2. Certification of proficiency in English based on the TOEFL score (for non-native speakers of English) 3. Qualifying in the BUCET or any of the following International Foreign-based examination in lieu of the BUCET such as: Scholastic Aptitude Test (SAT) Advanced with a minimum combined score of 1200 in Mathematics, Critical Reading and Writing sub-test areas."],

  // University Governance
  /* 1 */["The governing body of the University is vested in the Board of Regents (BOR) as mandated by the Higher Education Modernization in 1997."],
  /* 2 */["Chairperson of the Commission on Higher Education (CHED), Chairperson President of the University, Vice Chairperson Chairperson of the Congressional Committee on Education, Arts and Culture, Member Chairperson of the Congressional Committee on Technical and Higher Education, Member Regional Director, National Economic Development Authority (NEDA), Member Regional Director, Department of Science and Technology (DOST), Member Region Director of the Department of Agriculture (DA), Member President of the Bicol Faculty Association, Member Chairperson of the University Student Council, Member President od the BU Alumni Association, Member Two (2) prominent citizens, Member"],
  /* 3 */["The Administrative Council is composed of the President of the University as Chairperson, the Vice President, Deans, direstord and other officials of equal rank as members and whose duty is to review and recommend the Board of Regents policies governing the administration, management and development planning of the University for appropriate action."],
  /* 4 */["The Academic Council is composed of the President of the University as Chairperson and all members of the instructional staff with the rank assistant professor and above as members. The Academic Council shall have the power to review and recommend the curricular offerings and rules of discipline of the University subject to appropriate action of the board of Regents. It shall fix the requirements for the admission of students as well as for graduation and the conferment of degrees subject to review and/or approval by the Board of Regents through the President of the University."],
  /* 5 */["The administration is vested on the President who is asisted by the Vice-Presidents for Academic Affairs, for Planning and Development, for Research Development and Extension and for Administration and Finance. The body of professors and instructors of each college constitutes its faculty. Acting as president officer of each college/academic unit is a Dean/Director designated by the President and confirmed by the Board of Regents. Administrative agencies and offices of the Bicol Univeristy work primarily to serve the educational interest of the Institution through proper implementation of the policies that meet the needs of the University as an institution of higher learning in the Bicol Region."],
  /* 6 */["The duly elected Chairperson of the Bicol University Student Council who shall serve as the Student Regent represents the Students in the Board of Regents. In the interim period when the student representative loses his status as a student such as but not limited to graduation, transfer, expulsion and other similar causes, he may be represented by duly elected representative who may sit as regular member of the Board. The Chairperson of the University Student Council is invited to attend the Administrative and Academic Council as non-voting member. At the same time, student representatives are regular members of several standing and ad-hoc committees both in the University and College level."],

  // Academic Policies, Procedures and Programs
  /* 1 */["Generally, all academic units of the University in all levels operate under the semestral system in which classes are scheduled on a Monday."],
  /* 2 */["Students must wear the required uniform for their academic year level. The design approved by the Board of Regents are disseminated upon enrollment. "],
  /* 3 */["One unit of credit shall be atleast 18 full hours of instruction per semester in the form of lecture,discussion,seminar,tutorial, or equivalent field or any combination of these forms. A substantial equivalent shall be observed for other terms such as trimestral or quarterly system."],
  /* 4 */["The regular academic load for undergraduate students shall be that which is prescribed in the curriculum in a semester for a certain program/course."],
  /* 5 */["The University shall have a unifrom grading system using number grades from 1.0 to 5.0 where 1.0 is the highest. (refer to the detailed grading system on pp. 18-19 of Bicol University Student Handbook Reprinted Version 2019). "],
  /* 6 */["Undergraduate students are classified as regular, irregular, non-regular, and foreign. "],
  /* 7 */["There are a 3 categories for cross-registration and these are the ff: a) Cross-Registration within the Unversity, b) Cross-registration from another institution, and c) Corss-Registration to another institution."],
  /* 8 */["Change of subjects or transfer to other classes shall be made for valid reasons, which shall be stated in writing and approved by the College Dean. Changing subjects shall be within a week after the close registration and shall be only be allowed upon payment of the corresponding fee. After this period, no changing of subjects or transferring to other classes shall be allowed. The subject to be changed shall br considered."],
  /* 9 */["A subject or subjects added to one's academic load unofficially or without prior approval by the Dean shall not be given credit. Adding of subject(s) for valid reason shall be stated in writing for approval by the Dean of the college wherein one is enrolled. This shall be made within one week after the close of registration and shall only be allowed upon payment of the corresponding fee. The total load allowed however, shall not exceed the maximum under the rule on academic load or that, which is prescribed for his/ her curriculum year during the term/semester."],
  /* 10 */["A substitution of subjects may be allowed, provided that the consitions prescribed by the Unibersity are satisfied. All petitions must be approved upon the recommendation of the Department Chair to the College Dean before the 3rd class meeting shall have been held during the term. For more information, refer to page 13 of the Bicol University Student Handbook version 2019."],
  /* 11 */["A student may, with the conssent of the instructor and the College Dean, drop the subject by filling out the prescribed form within three-fourths of the total maximum class hours prescribed thereof. After the period has lapsed, a student may be allowed to drop a course by reason of illness duly certified by a physician, or other valid reasons. A student who unofficially drops his/her subject(s) after obtaining his/her mid-term grades shall be given a grade of 5.0 (failure) in all subjects at the end of the term. The subject instructor shall give the grade."],
  /* 12 */["A student may be entitled to withdraw his/her credentials submitted as requirements for enrollment. After this period, the request shall be for dropping of subjects and the rules for dropping shall apply."],
  /* 13 */["The rules on sequence of subjects in the curriculum in the course being taken must be followed. A subject or course approved by the Academic Council, as prerequisite to others should be taken before a higher course. Enrolling and attendance in a subject without passing its prerequisite shall earn sstudents no academic credit, unless such enrollment has been approved by the College Dean."],
  /* 14 */["A student of any college in the University who desires to shift to another course/program within the University for valid reason shall be governed by the following: 1. S/he has not obtained two or more failing grades in his/her present course/program;2. S/he has not finished fifty(5) percent or more of the required units on his/her present course; 3. His/her transfer is accepted by the Dean of the college where s/he plans to continue the new course; and 4. S/he earned a grade point average (GPA) of 2.4, 5. S/he has satisfieed all other requirements for admission to the new course. "],
  /* 15 */["If the absence is for five days or more, but not exceeding one month, a medical certificate must be secured from the University Medical Center, or from proper medical office outside the University."],
  /* 16 */["Any student who, for unavoidable cause, absents him/herself from classes must obtain an excuse letter from either the adviser or the guidance coordinator to be presented to the instructors concerned not later than the second session following his/her return. "],
  /* 17 */["Prolonged leave of absence shall be taken to mean temporary discontinuance of studies by the student due to illness, employment, pregnancy, and other similar cases. Leave of absence shall be granted through written petition to the college dean. The petition should statethe reason and the period, which must not exceed a consecutive period of two terms/ semesters, subject to renewal for very meritorous reasons. Such approved written petition shall be made part of his records. A student who leaves the University without formal leave of absence shall have his registration privileges curtailed or entirely withdrawn. "],
  /* 18 */["A. Academic Probation  - A student who fails in one subject at any time shall in succeeding term carry a load which in one subject (if equivalent unit) less the load allowed for his course during current semester.  A student who obtains two failing marks at the end of the term will be under probation during the following semester and may be allowed to take not more than seventy----- five percent(75%) of the regular load for the semester. Probation may be removed upon passing all the subjects carried during the term he/she is on probation"],
  /* 19 */["B. Academic Dismissal - A student who is under probation and is still obtains a failing mark in one of his subjects at the end of the term shall be automatically dropped from the rolls of the college. A student who obtains three or more failing grades at the end of the term shall be dropped from the rolls of the college. Third, fourth, and fifth year students, may be re-enrolled upon petition in writing addressed to the Academic Petitions Committee, provided the failure is for the first time. The maximum academic load that may be granted to the student is nine (9) units."],
  /* 20 */["C. Honorable Dismissal -  A student in good standing who desires to leave the University shall present his clearance and receipt of payment for a transcript of records to the Registrar for the preparation of a Certificate of Honorable Dismissal. The Certificates indicates that the student leaves the University in good standing as far as characted and conduct are concerned."],
  /* 21 */["D. Dismissal - A student who leaves the University for reason of dismissal due to disciplinary action shall be entitled, or permitted to receive the transcript of records or certification of his academic status in the University containing a statement of the disciplinary action rendered against him. He shall not be entitled to an honorable dismissal."],
  /* 22 */["E. Permanent Disqualification - Any student shall be permanently barred from re-enrolment in any college/school/unit of the University on the following grounds: 1. Poor Scholarship 2. Complete Failure 3.Dismissal"],
  /* 23 */["The University enjoys the academic freedom and institutional autonomy. No student is denied admission by reason of sex, nationalities, religion, political affiliation or physical ability."],
  /* 24 */["Residence refers to the number of years or terms required of a student to finish a course. An undergraduate student must finish the requirements of a course in any college within a period of actual residence equivalent to a maximum of the prescribed lenght of the program plus one year pursuant to the other provisions of the Universal Access to Quality Tertiary Education Act of 2017."],
  /* 25 */["Any change in curriculum must be implemented in such a way that the interest of the students is not prejudiced. When a new curriculum is enforced, only new students or first year shall be concerned. A student shall follow the same curriculum that s/he started within the maximum lenght of time allowed for residence. However, if some reasons s/he drops from school before graduation and when s/he returns, the maximum lenght of residence has been exceeded, s/he will already be covered by any change in curriculum that has been implemented while s/he was out. Similarly, if a student fails to finish his/her course within the prescribed maximum number of years of residence in the college, s/he shall be required to follow the new curriculum."],
  /* 26 */["..."],
  /* 27 */["..."],
  /* 28 */["..."],
  /* 29 */["..."],
  /* 30 */["..."],
  /* 31 */["..."],
  /* 32 */["..."],

  //Financial Information
  /* 1 */["It is indicated in the  UNIVERSAL ACCESS TO QUALITY TERTIARY EDUCATION ACT, all students pursuing a bachelor's degree in the University, not disregarding the exceptions provided in its implementing rules and regulations (IRR), are entitled to free tertiary education starting S.Y. 2018-2019, with the tuition fee and 13 miscellaneous fees approved in the law subsidizeed by the Commission on Higher Education (CHED). READ MORE ABOUT RA 10931 ON PAGES 23-24. "],
  /* 2 */["The schedule of fees is indicated in the Bicol University Student Handbook pages 23, 24,and 25. Please refer accordingly."],
  /* 3 */["All scholls fees are to be paid in full upon enrollment. However, the student can opt to pay the tuition fees in three-installment basis subject to the approval of the Dean/Directorof the college upon request. For a detailed discussion, refer to pages 26 and 27 of the Bicol University student handbook. "],
  /* 4 */["The University can accept payment of fees only in cash, postal money orders, telegraphic transfers, cablegrams, certified cashier's or manager's check. Personal checks are not acceptable."],
  /* 5 */[" For students who are not eligible to the benefits stipulated by R.A. 10931, sudents who have paid their matriculation , tuition and other fee ;and who withdraw their registration, or are granted honorable dismissal oy leave of absence shall be entitled to a refund of such fees except, entrance and matriculation fees, in accordance with the schedules indicatred on page 27 of the Bicol University Student Handbook. "],
  
  //Student Affairs and Services
  /* 1 */["The objectives of OSAS is indicated on page 28 under V. STUDENT AFFAIRS AND SERVICES."],
  /* 2 */["It is stipulated in CMO No. 9, s. 2013"],
  /* 3 */["The ff. are the groups which are open for membership: 1) BU MAGAYON DANCE TROUPE 2)TEATRO BUeno 3)BUNGCUL Singers 4) BU KUERDAS( Rondalla) 5) BUGKOS Ginikana -indigenous music ensemble, gamelan 6) UNIVERSITY MARCHING BAND"],

  // Locations
  /* 1 */["It is located near College of Science Building 4. Location on Google Maps 13.142328955808058, 123.72395873309782"],
  /* 2 */["It is located near Gate 4 of Bicol University Main Campus. Location on Google Maps 13.145484643180993, 123.72369491220357"],
  /* 3 */["From Bicol University Gate 4, head southwest on BU Main Campus Rd. Destination will be on the right. Location on Google Maps 13.144950504199903, 123.7228889084046"],
  /* 4 */["From BU Gate 4, head southwest on BU Main Campus Rd (190 m) and turn right .Destination will be on the right. Location on Google Maps 13.14491285020096, 123.72247806724519"],
  /* 5 */["from BU Gate 4, Head southwest on BU Main Campus Rd (270 m) and Turn right (170 m) . Location on Google Maps 13.142487177836639, 123.72146625928102"],
  /* 6 */["BU Administration Building, Legazpi City, Albay is loacted in BU Main Campus. From BU Gate 1, Head southwest , Destination will be on the right 50 m."],
  /* 7 */["From Gate 4, head southwest on BU Main Campus Rd 270 m,Turn right, Destination will be on the right 120 m. Location of Google Maps 13.143229735335188, 123.72156687915071"],
  /* 8 */["From Gate 4, Head southwest on BU Main Campus Rd (260 m), Turn right (170 m). Location on Google Maps 13.14204127780027, 123.72191748383545"],

  // Scholarship
  /* 1 */["Students who obtained a high average rating during two consecutive preceding terms in the University are awarded with a medal and a Certificate of Recognition while those hwo obtained a high avergae rating for a preceding semester are awarded a Certificate of Recognition. "],
  /* 2 */["The ff academic distinctions are given to non-graduating students who do not have a grade lower than 2.4 with the corresponding general ratings. PRESIDENT'S LISTER  1.00<= GRADE <= 1.45 || DEAN'S LISTER  1.45 <= GRADE <= 1.75 "],

  // General Information
  /* 1 */["It was written by Bobbie A. Garcia."],
  /* 2 */["The approved Female and male BU uniform design and specifications is indicated on pages 71 - 72 of the Bicol University Student Handbook."],

  // Updates: Scientia Online
  /* 1 */["ICYMI | The recently-concluded Piyesta Siyentista: Science and Technology Fair 2022 has brought out the best moments that are definitely worth reminiscing. From the warm and exciting moments of the Opening Ceremonies to the roaring and much-anticipated Closing Program, relive the best Siyentista moments through these photos. Facebook link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid08gdxJztKJ57ecYp8HPynNjof9uWT3XWFLE8pf9Wx9U75wF7P9s5egygTKBJoBP5El"],
  /* 2 */["Ginugunita ngayon ang kapanganakan ni Andres Bonifacio, ama ng Himagsikan ng Pilipino at pangulo ng ng Kataas-taasang Kapulungan. Read more on Scientia Online's facebook page: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02M2BWQtecNweDoPZiu5DUZ7HccBbG1giCqWJX4pEwYMkp9eYm3ofwJ8Nsbdy8tpGRl"],
  /* 3 */["BS Computer Science dethrones 5-peat champion, BS Biology, clinching this year’s Science and Technology Fair 2022 Championship Title.BS Meteorology came in a close second against the champions, keeping the first runner-up title for 2 consecutive years. Meanwhile, the BS Chemistry, BS Biology, and BS Information Technology, garnered the third, fourth, and fifth places, respectively. Facebook link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0VGQyBbXs9FVxn2thkdhEzmevKGHk8yK4gkJ1p1Q7CMGnr3xckBiPvfW8ZiSUf1RDl"],
  /* 4 */["NEWS UPDATE | ComSci reps achieve double victory in STAA; Biology student hailed as 1st CS Drag Kween. Facebook link: https://fb.watch/hdDfU6ZDIE/"],
  /* 5 */["Beyond their beauty and grace, the candidates have their clear and powerful voices heard in advocating for Science and Technology. See how the Ambassadors and the Ambassadresses from each department displayed their wit, showed their personalities, and expressed their advocacies in the Question-and-Answer portion of the Search for Science and Technology Ambassador and Ambassadress 2022. Click the link for more information! Facebook link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0PxDsUS2mShkGyxxNhKuZEwCYKsKj6VZoNtSoJSz34acTkcbQvwtryXHCGJiChmLtl"],
  /* 6 */["The major awards are awarded to: SCIENCE AND TECHNOLOGY AMBASSADRESS 2022 Ainah Mari Saba BS Computer Science | SCIENCE AND TECHNOLOGY AMBASSADOR 2022 Robert Segarra Barnard BS Computer Science || 1ST RUNNERS UP || Lana Maxene Ordiales BS Meteorology | Steven Marc Red Sabdao BS Meteorology || 2ND RUNNERS UP || Hilary Angelu Rangel BS Chemistry | Russel James Recamunda BS Information Technology || 3RD RUNNERS UP || Daryll De Vergara BS Biology | Mac Wilsky Lasona BS Biology || 4TH RUNNERS UP || Mary Grace Condat BS Information Technology | Jose Erwin II Taduran BS Chemistry | Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02NhhwFsdMQzXFBkWmipUxyLM7fVvxjCEjPrh3TyAH9ZQPpRabra4tVkDiDY2xtnJhl"],
  /* 7 */["Representing the Biology Department, Mykael Eris Mujar marks history as the first-ever Sci-Tech Kween of Drag, during the inaugural SciTech Drag Race. Meanwhile, MJ Novora from the Information Technology Department was declared as first-runner up. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02wszJGt4HHZwkE2zGy3eHatCCQUmKKh4RrZ8whjCJmQ9qmhgbkv1jSNt6w7QUs6S4l"],
  /* 8 */["Here are the recipients for the minor and corporate awards: BEST IN FORMAL ATTIRE Ainah Mari Saba Ambassadress of Computer Science | Robert S. Barnard Ambassador of Computer Science || BEST IN PRODUCTION NUMBER Hilary Angelu Rangel Ambassadress for Chemistry | Steven Marc Red Sabdao Ambassador for Meteorology || BEST IN DEPARTMENT COSTUME Lana Maxene Ordiales Ambassadress of Meteorology | Steven Marc Red Sabdao Ambassador of Meteorology || MR. and MS. CONVERGE Ainah Mari Saba Ambassadress of Computer Science | Robert S. Barnard Ambassador of Computer Science || MR. AND MS. CAMALIG GYM Ainah Mari Saba Ambassadress of Computer Science | Robert S. Barnard Ambassador of Computer Science. Facebook link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02nYk56TbEHdfGRGj8396uRovRNFVQzA9EbVRocLAAPBcYHfBj2sXR4A1uZfjcTNASl"],
  /* 9 */["Here are the results for the Pre-determined Awards for the Science and Technology Ambassador and Ambassadress 2022: PEOPLE'S CHOICE AWARD Lana Maxene Ordiales Ambassadress of Meteorology | Steven Marc Red Sabdao Ambassador of Meteorology || MR. AND MS. CONGENIALITY Jose Erwin II Taduran Ambassador of Chemistry | Ainah Mari Saba Ambassadress of Computer Science || MR. AND MS. PHOTOGENIC Robert S. Barnard Ambassador of Computer Science | Lana Maxene Ordiales Ambassadress of Meteorology || BEST IN ADVOCACY Jose Erwin II Taduran Ambassador of Chemistry | Lana Maxene Ordiales Ambassadress of Meteorology. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0j2CCa5sWtAXimx4DCNMbSpDcpW1wy1njnxkJ2iTMKmpJLUowLEoC2AdxKbvS7XFMl"],
  /* 10 */["NEWS FLASH | STAA 2022 at kauna-unahang Drag Race tampok sa pagtatapos ng Piyesta Siyentista. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0j2CCa5sWtAXimx4DCNMbSpDcpW1wy1njnxkJ2iTMKmpJLUowLEoC2AdxKbvS7XFMl"],
  /* 11 */["Sci-Tech Fair 2022 sets off; interactive booths attract CSians. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid05ixcYQSbuB5tG212i71RgUaank9hrhRXoiL9wPjNnDCwfTkrMzafKJXMM1BoAnJBl"],
  /* 12 */["NEWS FLASH | Sci-Tech Fair 2022 opisyal nang pinasinayaan; samu'y saring booth patok sa BUenos. Facebook Link: https://fb.watch/hdF7uctC__/"],
  /* 13 */["The opening program for Piyesta Siyentista: Science and Technology Fair 2022 has finally commenced at the Building 4 of the College of Science. Read more on Scientia Online. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0By6mvT9GNWRy7VSGijo7QWnhHsT4XUFHGcaXXK7zyzZXWhPxP1JVERqSwTMFea7gl"],
  /* 14 */["The College of Science - College Student Council, as well as some College-based Organizations, has started setting up the stage and gearing up their respective booths, in preparation for the Piyesta Siyentista: Science and Technology Fair slated on Monday, November 28 to November 29 at the College of Science. Read more on Scientia Online. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0NTQDaYf3EFHmEATVohp6FPSrRjNHfrNaXFzMWdUUc5LrxFMgWUhorWL2gnjB18BSl"],
  /* 15 */["With hopes of mainstreaming meteorological education in the Bicol Region, the STudents' ORganization in Meteorology (STORM), in partnership with the Philippine Meteorological Society (PMS) and the BUCS Physics Department, spearheaded the PMS Talk: Meet the MET 2022, held today, November 18, 2022, in the BRFICC Building at the Bicol University-East Campus. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02BUNrDAPUcmdsZv3PBvURt6wZhpysZ8JDSuZPo1cywQ1wmwk7DihXEHWV1Vd3nNuxl"],
  /* 16 */["JUST IN | At exactly 8:52 in the evening, the anticipated Mr. and Ms. Bicol University 2022 has finally commenced at the Albay Astrodome. Tonight, 32 candidates representing their respective colleges will battle it out to attain the university’s most coveted title. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02Tg2ARgVGUE7Nrho5UXvLFGeW7294eFFXfzseGYMzPjBLB7VtCNwUx4w22Hqk13Tnl"],
  /* 17 */["MMBU TOP 16 || The night is young but the competition is already at its peak. From 32, here are the top 16 candidates that is one step closer from clinching the title, Mr. and Ms. Bicol University 2022. || TOP 8 MALE CANDIDATES || ALVIN JOHN CHAVEZ College of Engineering | JOSHUA ONSAY College of Arts and Letters | JOSEPH CEDRIC DUANO College of Medicine | ALDRIN ABION Jesse M. Robredo Institute of Governance and Development | KAHJJI DANE MARK GIMORO College of Nursing | KEESE WEST PLACIDES Polangui Campus | BLAISE CHRISTIAN PEREZ College of Science | ABNER EMMANUEL TY Institute of Design and Architecture || TOP 8 FEMALE CANDIDATES || RHIANNE MACY ZAPATA College of Social Sciences and Philosophy | THIARA MARIE SAN PABLO College of Arts and Letters | CHARLENE BOHOLANO Jesse M. Robredo Institute of Governance and Development | RANI LACHMI DADO Institute of Design and Architecture | JESSAIAH MAE BALDESCO Institute of Physical Education, Sports, and Recreation | MA. ALEXA GARCIA Polangui Campus | ELAINE BERNALES College of Science | ADRIENNE JOYCE HERMOGENO College of Nursing. Facebook Link: https://www.facebook.com/photo/?fbid=534834261983403&set=a.445280190938811"],
  /* 18 */["MR. BICOL UNIVERSITY 2022 - 2nd Runner-up || KAHJJI DANE MARK GIMORO College of Nursing | MS. BICOL UNIVERSITY 2022 - 2nd Runner-up || CHARLENE BOHOLANO Jesse M. Robredo Institute of Governance and Development. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid02Tzv15yhNvF72MgjMVAinwU1A2wup9mjsLvwYUH1uVrvh9L8diLhCgsUPg4xsXwCkl"],
  /* 19 */["MR. BICOL UNIVERSITY 2022 - 3rd Runner-up || ALDRIN ABION Jesse M. Robredo Institute of Governance and Development | MS. BICOL UNIVERSITY 2022 - 3rd Runner-up RANI LACHMI DADO Institute of Design and Architecture. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0t7neuAzjqVradYfCd6rkXbcaTAwPMzQaEyds7GHTJVsaayHxxZCqPL1ioMD5Gcqsl"],
  /* 20 */["MR. BICOL UNIVERSITY 2022 - 1st Runner-up || JOSHUA ONSAY College of Arts and Letters | MS. BICOL UNIVERSITY 2022 - 1st Runner-up || THIARA MARIE SAN PABLO College of Arts and Letters. Facebook Link: https://www.facebook.com/bucs.scientiaonline/posts/pfbid0ySk4rX9AC9zMHxgDkfn3AYKMcTZvGjJWUDFJbGQo2SADZmiDfe6bDJCrKCu1B8gwl"],
  /* 21 */["MR. BICOL UNIVERSITY 2022 || JOSEPH CEDRIC DUANO College of Medicine | MS. BICOL UNIVERSITY 2022 || RHIANNE MACY ZAPATA College of Social Sciences and Philisophy. Facebook Link: https://www.facebook.com/photo/?fbid=535029951963834&set=pcb.534877795312383"],
  /* 22 */["The Bicol University Admissions Office (BUAO) issued a statement on November 5, 2022, regarding the alleged circulation photos of test items in the Bicol University College Entrance Test (BUCET) for the Academic Year 2023-2024. Read More: https://www.facebook.com/photo/?fbid=535029951963834&set=pcb.534877795312383"],

  // Updates: The Bicol Universitarian
  /* 1 */["It's 25 days left before Christmas! Wrap your presents and hang  your lantern because the happiest day of the year is almost here! Facebook Link: https://fb.watch/hdolZPCFD7/"],
  /* 2 */["The Bicol Universitarian congratulates Bicol University Nursing Community for achieving a 100 percent passing rate (first-takers) in the November 2022 Nursing Licensure Examination, with all of its 237 takers hurdling the exams.BU Tabaco Campus and Polangui Campus ranked first on the top performing schools with 66 and 58 qualified takers respectively, while BU Main Campus achieved 111 qualified examinees.  We also rejoice for the amazing performance of the following topnotchers from BU: RANK 8: Pamela Peña (BU Main) - 88.60% RANK 9: Claire Ann Lou Lumbes (BU Main) and Choan Neo (BU Polangui) - 88.40% RANK 10: Jan Mariell Elnar (BU Polangui), Mary Claire Garcia (BU Main), and Mikhaela Yvonne Llaneta (BU Main) - 88.20%. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0wza24CUWxkKb6DeFHuPhH2vjuvQmLdfxo7ZeHiChpGaX67rQKbxihukXEbyZBqsl"],
  /* 3 */["The Bicol University (BU) Board of Regents (BOR) has begun the search for the new University President. As approved by the BOR the next prexy will be appointed for a term of four years beginning on March 9, 2023, in compliance with the relevant provisions of Republic Act 8292. A candidate who cannot provide the necessary supporting documentation and does not meet any of the required minimal requirements will be rejected from the process. DEADLINE OF SUBMISSION: JANUARY 13, 2023 AT 5 O’CLOCK P.M. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid02T3DZrcnKT7J9j7ijWExLUrxXVgrxpHG4weu8j4qN7xfX5xRpevBeNnB7HqUi56Jal?__cft__[0]=AZULPxcuXpb1Bg7ZH2jXA-jzAgpVag5fpz1dHUq-_thU6qk7pQlzvR83Ij6JFd1hYgEdcTefJjJcfwMaFGj4avd4BiMs9wtypZhDHVnjE5fdbZyY6jsqMlbXcqAhksexyO9KT-g4KzTBC_rbkxrhqBO6swoCXuQ8Sly6g9v1zf1EHJyr9r5diMgtyj13vJ_Wcqg&__tn__=*F"],
  /* 4 */["The Bicol Universitarian congratulates the Bicol University - Legazpi’s 95   newly-licensed civil engineers including Mr. Carl Justin Barredo Berces claiming the 10th spot with a rating of 92.90% in the November 2022 Civil Engineering Licensure Examination (CELE). Bicol University - Legazpi gained 47.40% passing rate, while Bicol University College of Industrial Technology (BUCIT) aimed 33.33%. The Professional Regulation Commission (PRC) conducted the Civil Engineering Licensure Examination in Metro Manila, Baguio, Cagayan de Oro, Cebu, Davao, Iloilo, Koronadal, Legazpi, Lucena, Pagadian, Pampanga, Rosales, Tacloban, Tuguegarao and Zamboanga on November 19 - 20, 2022. Source: Professional Regulation Commission (PRC) - November 2022 Civil Engineering Licensure Examination Results. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0bkRaBP5uXBWHKY5Jrz1QZarK2wE636Qi94Bo6XCoBSCeLeFZbmnbpBAZ4SET9NvYl"],
  /* 5 */["The Bicol Universitarian congratulates Bicol University College of Engineering - Civil Engineering (BUCENG-CE) as they claimed the Overall Championship in the Regional Civil Engineering Students' Summit (RCESS) 2022, with the theme: Bicolano Civil Engineers Transforming the Blueprints of the Present, Forging a Sustainable Future. The BU team clinched 5 gold medals, 5 silver medals, and 2 bronze medals from various sports competitions and academic contests. The summit showcases the skill and knowledge of civil engineering students in various fields and disciplines, held on November 25-27, 2022, at the Ateneo De Naga University, Ateneo Avenue, Naga City.  The Head of the delegation and President of the Philippine Institute of Civil Engineers-Bicol University Student Chapter (PICE-BUSC), Mr. Sean Andrei Parao, extends his sincere gratitude to Dr. Arnulfo P. Mascariñas, Dr. Amelia B. Gonzales, Dr. Baby Boy Benjamin Nebres III , Jeanne Marie Morcoso-Llana, Joseph Bartolata, and Engr. Oliver Aligan. Parao also acknowledged the USC Chairperson and Student Regent, Asher Jade Azul for her aid and participation at the summit despite a busy schedule. The summit was attended and participated by delegates from thirteen (13) colleges and universities across Bicol Region who competed in various sports competitions and academic events. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0s3s9R2RRcVUBqsu9CJ7k1Mu7KdYv9iG3CeGHfd21hXDKz2rRgavAJsjM1HN1swh1l"],
  /* 6 */["Several student organizations from Bicol University College of Science (BUCS) prepare their respective booths stationed in front of the college buildings for their two-day science and technology fair Pista ng Agham at Teknolohiya from November 28 to 29, 2022 spearheaded by BUCS College Student Council. Among the organizations taking part in the event are Symbiosis, Academic Consortium of Computer Science Students, Circle of Unified Information Technology Students, Student’s Organization for Meteorology, Chemical Science Society,  BUCS Peer Counselors Organization, BUCS Sports Club, Scientia and CSyntaxx (CS Official Dance Troupe). The event has the theme Agham at Teknolohiya, Kabalikat sa Maunlad at Matatag na Kinabukasan. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0sQcfamThqgA3hSxXAvNiDXNa6VDYkMHCKvZsXEeUEk9WSM1F6b1XbsFtbQFwYQejl"],
  /* 7 */["A third-year Bicol University Civil Engineering student suffers from injuries after being hit by a motorcycle while crossing a pedestrian lane in Magsaysay Avenue, Naga City. The student was a participant in the Regional Civil Engineering Students' Summit (RCESS) 2022 hosted by Ateneo de Naga University on November 25-27. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid02CKdYRL8jUMDcnzywuN6LpAsJks5LWNikjxAKxFGVwq63xnwUVj6EuG79HBTRngJKl"],
  /* 8 */["As one of the highlights of the 13th 11.23 Maguindanao Massacre Commemoration, student-journalists, organization officers, and regular students silently march from the old CAL and back twice. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0nkyY19P3ri3F57Cpm74DbWzn8DRMAiErS9CzxvAieiQ1i74n6tPqb4rVdxDojCNAl"],
  /* 9 */["Students, volunteers, sponsors, and keynote speakers gather at the Bicol University College of Engineering (BUCEng) at the East Campus to celebrate the Pista ng Mapa 2022: State of the Map Asia (SoTM Asia) conference today, November 21, 2022. Facebook Link: https://www.facebook.com/thebicoluniversitarian/posts/pfbid0scxRqfkEkEh4M9Tuf7HjGLJrTQRNRYiiZnYn3KSzq1NFfi9bmUoCN44NS4NZwuR9l"],
  /* 10 */[" Daraga shines bright as Christmas nears with its string lighting ceremony at Rizal Street, Daraga, Albay which commenced at 6 p.m. today after a two-year halt. The event also featured a program at the Daraga Covered Court. See link for photo and original post: https://www.facebook.com/thebicoluniversitarian/photos/pcb.3436807679895916/3436807226562628/"],
  /* 11 */["BU College of Arts and Letters - College Student Council (CAL-CSC), various Department Based Organizations (DBOs), and College Based Organizations (CBOs) orchestrated the lighting ceremony for Belenismo: Christmas Belen Making Contest 2022. See link for full article: https://www.facebook.com/thebicoluniversitarian/posts/pfbid04J4xzabfGLc5VqdWsjPwuMaFyqLLNHPB8GcAqvNQa1NWDHDgPxgpYtxfBHRk28EWl"],

  // Updates: BU University Student Council
  ["The Bicol University - University Student Council informs everyone about the current standing of the USC FEE REMITTANCES per College through the CSC Treasurers as of December 3, 2022, 4:00 P.M."],

  // Calendar of Activities
  /* 1 */["It is scheduled on December 15 - 17, 2022. Goodluck on your exams!"],
  /* 2 */["It is in December 16, 2022"],
  /* 3 */["It is on December 17, 2022"],
  /* 4 */["The semestral break starts on December 18, 2022. Enjoy your vacation"],
  /* 5 */["The semestral break starts on December 18 to 24, 2022. Enjoy your vacation!"],
  /* 6 */["The classes for elementary, secondary, and senior high school resume on January 02, 2023. "],
  /* 7 */["The general enrolment period for the 2nd semester of the Tertiary level will be on January 02-14, 2023. "],
  /* 8 */["The start of classes for Tertiary level will be on January 16, 2023."],
  /* 9 */["The schedule of the midterm examination of graduating students will be on March 02-04, 2023. Goodluck!"],
  /* 10 */["The schedule of the midterm examination of non-graduating students will be on March 16 -18, 2023. Goodluck!"],
  /* 11 */["The schedule for the final examination of graduating students will be on April 27-29, 2023. Goodluck students!"],
  /* 12 */["The schedule for the final examination of non-graduating students will be on May 19-23, 2023. Goodluck students!"],
]

// Random for any other user input

const alternative = [

  "I don't understand... :( Please type your query again."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]