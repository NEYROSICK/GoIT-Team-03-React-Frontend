import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';

function NewsList() {
  const newsData = [
    {
      id: 1,
      image: '../../images/image4.jpg',
      title: 'On Pets, Moral Logic and Love',
      description:
        'In January, I fell in love with someone. It was the last thing I’d expect and caught me completely off guard.He has sandy blond hair with flecks of gray and gorgeous, sad eyes. He loves to go on walks and cuddle. His name is Herbie. ',
      details: '15/03/2023',
    },
    {
      id: 2,
      image: '../../images/image5.jpg',
      title: 'When Helpless Fish Need a Hero, She Answers the Call',
      description:
        'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. Construction workers have been at work demolishing an abandoned tuberculosis hospital in Queens over the past several months, dismantling the long-empty wards and carting off the bricks.',
      details: '15/03/2023',
    },
    {
      id: 3,
      image: '../../images/image6.jpg',
      title: '3 Dogs Die After Eating Poisoned Meatballs at a Race in France',
      description:
        'The poisonings took place at the French canicross championships, in which people run or cycle while attached to their dogs. Three dogs died last weekend after eating poisoned meatballs during a canine cross-country race in southern France, ',
      details: '15/03/2023',
    },
    {
      id: 4,
      image: '../../images/image7.jpg',
      title:
        'How a Trade Changed Everything for Two N.B.A. Players and Their Dogs',
      description:
        'Professional sports can be a tough business. When Mikal Bridges was dealt from the Suns to the Nets, his friend Cam Payne had to give the news to Sonny and Uno. When Mikal Bridges was traded from the Phoenix Suns to the Nets in early February, he had to join his new team without stopping at home in Arizona first.',
      details: '15/03/2023',
    },
    {
      id: 5,
      image: '../../images/image8.jpg',
      title:
        'Our Relatives Keep Bringing Their Dog Over. How Can We Stop Them?',
      description:
        'The magazine’s Ethicist columnist on how to tell loved ones that you don’t love their pet.My brother-in-law and his wife adopted a dog a year ago. Since then, every time they have come over to our home, they have brought the dog too.',
      details: '15/03/2023',
    },
    {
      id: 6,
      image: '../../images/image 9.jpg',
      title: 'For Ukraine’s Animals, a Home Is Getting Harder to Find',
      description:
        'The first thing you hear after entering the animal sanctuary in Znesinnya Park near the center of Lviv are the dogs. There are scores of them barking and howling, members of a raucous makeshift orchestra sounding out a discordant opera.',
      details: '15/03/2023',
    },
    // Add more news items here
  ];

  return (
    <List>
      {newsData.map((news) => (
        <NewsItem
          key={news.id}
          imageUrl={news.image}
          title={news.title}
          description={news.description}
          details={news.details}
        />
      ))}
    </List>
  );
}

export default NewsList;
