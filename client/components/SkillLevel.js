// import { text } from "express";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CardFlip from "react-native-card-flip";

export default function SkillLevel() {

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>What is your Skill Level?</Text>
      <View style={styles.buttonContainer}>

      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card1]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()}>
          <Text style={styles.description}>Beginner-1 is familiar with basics, able to swing overhead and underarm to strike the shuttle. Has obvious stroke weaknesses (typically the backhand/service/overhead clear). No control or unable to put pace (speed) on the shuttle intentionally. Weak court coverage in singles and doubles.</Text>
        </TouchableOpacity>
      </CardFlip>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    cardContainer: {
      width: 320,
      height: 470,
    },
    card: {
      width: 320,
      height: 470,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      lineHeight: 470,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
        flexWrap:'wrap'
      },
  });
