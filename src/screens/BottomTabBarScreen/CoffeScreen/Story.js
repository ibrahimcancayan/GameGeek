import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import InstaStory from 'react-native-insta-story';
import { Video } from 'expo-av';
const { width, height } = Dimensions.get("window");


const data = [
  {
    user_id: 1,
    user_image:
      'https://productimages.hepsiburada.net/s/191/375/110000158015753.jpg',
    user_name: 'Valorant',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://cdn.bynogame.com/news/1677781297265.webp',
        swipeText: 'story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://staticc.sportskeeda.com/editor/2023/03/ea8e0-16798213547109-1920.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://www.talkesport.com/wp-content/uploads/Valorant-Patch-5.07.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  {
    user_id: 3,
    user_image:
      'https://i4.hurimg.com/i/hurriyet/75/0x0/641bf54f4e3fe11af81d8e5b.jpg',
    user_name: 'CS:GO 2',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://ares.shiftdelete.net/2023/03/cs-go-kac-gb-counter-strike-boyutu-sistem-gereksinimleri-1.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://pchocasi.com.tr/wp-content/uploads/2023/03/CS-GO-2-3-1.png',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://i.hbrcdn.com/haber/2023/03/15/cs-go-2-sistem-gereksinimleri-neler-cs-go-2-15696948_714_amp.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  {
    user_id: 4,
    user_image:
      'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg',
    user_name: 'APEX LEGENDS',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://assets-prd.ignimgs.com/2023/02/16/apexrevelry-1676588335122.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://static-cdn.jtvnw.net/ttv-boxart/170987874_IGDB-285x380.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  {
    user_id: 1,
    user_image:
      'https://productimages.hepsiburada.net/s/191/375/110000158015753.jpg',
    user_name: 'Valorant',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://cdn.bynogame.com/news/1677781297265.webp',
        swipeText: 'story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://staticc.sportskeeda.com/editor/2023/03/ea8e0-16798213547109-1920.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://www.talkesport.com/wp-content/uploads/Valorant-Patch-5.07.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  {
    user_id: 3,
    user_image:
      'https://i4.hurimg.com/i/hurriyet/75/0x0/641bf54f4e3fe11af81d8e5b.jpg',
    user_name: 'CS:GO 2',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://ares.shiftdelete.net/2023/03/cs-go-kac-gb-counter-strike-boyutu-sistem-gereksinimleri-1.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://pchocasi.com.tr/wp-content/uploads/2023/03/CS-GO-2-3-1.png',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://i.hbrcdn.com/haber/2023/03/15/cs-go-2-sistem-gereksinimleri-neler-cs-go-2-15696948_714_amp.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  {
    user_id: 4,
    user_image:
      'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg',
    user_name: 'APEX LEGENDS',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://assets-prd.ignimgs.com/2023/02/16/apexrevelry-1676588335122.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:
          'https://static-cdn.jtvnw.net/ttv-boxart/170987874_IGDB-285x380.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
    ],
  },

  
 

];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InstaStory
        data={data}
        duration={10}
        customSwipeUpComponent={
          <View>
          </View>
        }
        style={{ marginTop: height*0.0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    
  },
});
