import Navigation from './components/navigation/quran.navigation';

const QuranPage = () => {
  return (
    <>
      <Navigation />
      <div>Quran Page</div>
    </>
  );
};

export default QuranPage;

// React.useEffect(() => {
//   if (surahNumber === 114 && verse === surah.numberOfVerse) return;

//   const timmer = setInterval(() => {
//     if (verse < surah.numberOfVerse) {
//       setVerse(verse + 1);
//       return;
//     }

//     if (verse === surah.numberOfVerse) {
//       setSurahNumber(surahNumber + 1);
//       setVerse(1);
//       return;
//     }
//   }, 3000);

//   return () => {
//     clearInterval(timmer);
//   };
// }, [verse]);
