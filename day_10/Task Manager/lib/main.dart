import 'package:flutter/material.dart';
import 'home_screen.dart';

// The global controller for theme
final ValueNotifier<ThemeMode> themeNotifier = ValueNotifier(ThemeMode.dark);

void main() {
  runApp(const StudentTaskApp());
}

class StudentTaskApp extends StatelessWidget {
  const StudentTaskApp({super.key});

  @override
  Widget build(BuildContext context) {
    // This builder listens to themeNotifier and rebuilds the whole app
    return ValueListenableBuilder<ThemeMode>(
      valueListenable: themeNotifier,
      builder: (_, currentMode, __) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          themeMode: currentMode,
          // Light Theme Settings
          theme: ThemeData(
            brightness: Brightness.light,
            useMaterial3: true,
            colorSchemeSeed: Colors.blue,
          ),
          // Dark Theme Settings
          darkTheme: ThemeData(
            brightness: Brightness.dark,
            useMaterial3: true,
            colorSchemeSeed: Colors.blue,
          ),
          home: const HomeScreen(),
        );
      },
    );
  }
}