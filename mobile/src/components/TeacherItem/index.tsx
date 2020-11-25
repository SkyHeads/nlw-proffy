import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/43793592?s=460&u=977cc37f6e87bcc029d8efc6d89ca7e5a5d55de9&v=4',
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Bruno Fernandes</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de química avançada.
        {'\n'}
        {'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
