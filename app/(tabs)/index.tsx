import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';



const IndexPage = () => {
  const [selectedZone, setSelectedZone] = useState('Mid field');
  const [brightness, setBrightness] = useState(50);
  const [color, setColor] = useState('');
  const [intensity, setIntensity] = useState(50);
  const [effect, setEffect] = useState('Lightning');

  const zones = ['North End', 'Mid field', 'South End'];
  const effects = [
    'Lightning', 'Night Rider', 'Pulse', 'Rainbow',
    'National Anthem', 'Halloween', 'St. Patrick\'s Day',
    'Police', 'Christmas', 'Valentine’s Day',
  ];
  const colors = ['#9b59b6', '#f1c40f', '#e74c3c', '#3498db', '#1abc9c', '#ffffff'];

  return (
    <View style={{ flex: 1, backgroundColor: '#d6ecfc', paddingTop: 50, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Hi, Drax</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* ZONE */}
        <View style={{ width: '30%' }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>ZONE</Text>
          {zones.map((zone) => (
            <TouchableOpacity
              key={zone}
              onPress={() => setSelectedZone(zone)}
              style={{
                marginBottom: 10,
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: selectedZone === zone ? '#bbb' : '#fff',
              }}
            >
              <Text style={{ textAlign: 'center' }}>{zone}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CONTROL */}
        <View style={{ width: '30%' }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>CONTROL</Text>

          <Text style={{ marginBottom: 5 }}>All Lights</Text>
          <Switch value={true} />

          <Text style={{ marginTop: 10 }}>Brightness</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={brightness}
            onValueChange={setBrightness}
          />

          <Text style={{ marginTop: 10 }}>Color</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {colors.map((c, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setColor(c)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: c,
                  margin: 5,
                  borderWidth: color === c ? 2 : 0,
                  borderColor: '#000',
                }}
              />
            ))}
          </View>

          <Text style={{ marginTop: 10 }}>Color Intensity</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={intensity}
            onValueChange={setIntensity}
          />
        </View>

        {/* EFFECTS */}
        <View style={{ width: '30%' }}>
  <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>EFFECTS</Text>
  <ScrollView>
    {effects.map((eff) => (
      <TouchableOpacity
        key={eff}
        onPress={() => setEffect(eff)}
        style={{
          paddingVertical: 14,
          paddingHorizontal: 10,
          marginBottom: 12,
          backgroundColor: effect === eff ? '#e0e0e0' : '#f5f5f5',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#d9d9d9',
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.15,
          shadowRadius: 1.5,
          elevation: 3, // Android shadow
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: '600',
            textAlign: 'center',
            color: '#333',
          }}
        >
          {eff}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>


      </View>

      {/* BOTTOM NAVIGATION */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 12,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: '#ddd',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Ionicons name="sunny" size={24} color="black" />
        <Ionicons name="time" size={24} color="#bbb" onPress={() => {}} />
        <MaterialIcons name="music-note" size={24} color="#bbb" onPress={() => {}} />
        <Entypo name="mic" size={24} color="#bbb" onPress={() => {}} />
        <Entypo name="map" size={24} color="#bbb" onPress={() => {}} />
        <Ionicons name="options" size={24} color="#bbb" onPress={() => {}} />
      </View>
    </View>
  );
};

export default IndexPage;
