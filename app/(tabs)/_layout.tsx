import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Tabs, useRouter, usePathname } from 'expo-router';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const activeColor = '#000';
  const inactiveColor = '#bbb';

  const navItems = [
    { name: 'sunny', path: '/', iconSet: Ionicons },
    { name: 'time', path: '/explore', iconSet: Ionicons },
    { name: 'music-note', path: '/music', iconSet: MaterialIcons },
    { name: 'mic', path: '/mic', iconSet: Entypo },
    { name: 'map', path: '/map', iconSet: Entypo },
    { name: 'options', path: '/settings', iconSet: Ionicons },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // hide default tab bar
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="explore" />
        <Tabs.Screen name="music" />
        <Tabs.Screen name="mic" />
        <Tabs.Screen name="map" />
        <Tabs.Screen name="settings" />
      </Tabs>

      {/* Custom Bottom Nav */}
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
        {navItems.map((item, index) => {
          const Icon = item.iconSet;
          const isActive = pathname === item.path || pathname === `/tabs${item.path}`;
          return (
            <TouchableOpacity key={index} onPress={() => router.push(item.path as any)}>
            <Icon name={item.name as any} size={24} color={isActive ? activeColor : inactiveColor} />
          </TouchableOpacity>
          
          );
        })}
      </View>
    </>
  );
}
