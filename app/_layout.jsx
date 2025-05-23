import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
// import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { config } from '@/components/ui/gluestack-ui-provider/config'; // <-- your theme config
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { StyledProvider } from '@gluestack-style/react';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StyledProvider config={config}>
    <GluestackUIProvider>
      <PaperProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </PaperProvider>
    </GluestackUIProvider>
    </StyledProvider>

  );
}
