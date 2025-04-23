import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Box,
  Text,
  Button,
  Switch,
  Slider,
  VStack,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';

const IndexPage = () => {
  const [selectedZone, setSelectedZone] = useState('Mid field');
  const [brightness, setBrightness] = useState(50);
  const [color, setColor] = useState('');
  const [intensity, setIntensity] = useState(50);

  const zones = ['North End', 'Mid field', 'South End'];
  const effects = [
    'Lightning',
    'Night Rider',
    'Pulse',
    'Rainbow',
    'National Anthem',
    'Halloween',
    'St. Patrick\'s Day',
    'Police',
    'Christmas',
    'Valentine’s Day',
  ];
  const selectColors = ['#9b59b6', '#f1c40f', '#e74c3c', '#3498db', '#1abc9c', '#ffffff'];

  return (
    <Box flex={1} p="$4" pt="$10">
      <Text size="2xl" bold mb="$4">Hi, Drax</Text>

      <HStack space="lg" flexWrap="wrap">
        {/* Zone Selector */}
        <VStack flex={1} space="sm">
          <Text bold>ZONE</Text>
          {zones.map((zone) => (
            <Pressable
              key={zone}
              onPress={() => setSelectedZone(zone)}
            >
              <Box
                p="$2"
                borderRadius="$md"
                borderWidth={1}
                borderColor="$coolGray300"
                bg={selectedZone === zone ? '$coolGray400' : '$white'}
              >
                <Text textAlign="center">{zone}</Text>
              </Box>
            </Pressable>
          ))}
        </VStack>

        {/* Control Section */}
        <VStack flex={1} space="md">
          <Text bold>CONTROL</Text>

          <Text>All Lights</Text>
          <Switch value={true} />

          <Text>Brightness</Text>
          <Slider
            value={brightness}
            onChange={setBrightness}
            minValue={0}
            maxValue={100}
          />

          <Text>Color</Text>
          <HStack flexWrap="wrap">
            {selectColors.map((c, idx) => (
              <Pressable key={idx} onPress={() => setColor(c)}>
                <Box
                  width={30}
                  height={30}
                  borderRadius={999}
                  bg={c}
                  m="$1"
                  borderWidth={color === c ? 2 : 0}
                  borderColor="$black"
                />
              </Pressable>
            ))}
          </HStack>

          <Text>Color Intensity</Text>
          <Slider
            value={intensity}
            onChange={setIntensity}
            minValue={0}
            maxValue={100}
          />
        </VStack>

        {/* Effects */}
        <VStack flex={1}>
          <Text bold mb="$2">EFFECTS</Text>
          <ScrollView>
            <VStack space="sm">
              {effects.map((eff, idx) => (
                <Button key={idx} onPress={() => console.log(`Pressed ${eff}`)}>
                  {eff}
                </Button>
              ))}
            </VStack>
          </ScrollView>
        </VStack>
      </HStack>
    </Box>
  );
};

export default IndexPage;
