import 'package:flutter/material.dart';
import 'home_page.dart'; // Import your custom home page file

void main() {
  runApp(const QuickTaskApp());
}

class QuickTaskApp extends StatelessWidget {
  const QuickTaskApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'QuickTask App',
      debugShowCheckedModeBanner: false,
      // Setting the Global Dark Theme
      theme: ThemeData.dark(useMaterial3: true).copyWith(
        colorScheme: ColorScheme.fromSeed(
            seedColor: Colors.deepPurple,
            brightness: Brightness.dark
        ),
      ),
      home: const HomePage(),
    );
  }
}