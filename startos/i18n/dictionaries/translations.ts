import { LangDict } from './default'

export default {
  es_ES: {
    // main.ts
    1: 'La interfaz web está lista',
    2: 'La interfaz web no está accesible',
    3: 'Migración de base de datos',
    4: 'Migración de base de datos completada',
    5: 'Migración de base de datos en progreso. Esto puede tardar mucho tiempo. NO reinicie.',

    // actions/resetPassword.ts
    10: 'Restablecer contraseña',
    11: 'Restablecer la contraseña de administrador de Uptime Kuma',
    12: 'Contraseña restablecida',
    13: 'Su contraseña ha sido restablecida. Use la nueva contraseña a continuación para iniciar sesión.',
    14: 'Reemplaza la contraseña de administrador. La contraseña actual deja de funcionar y la nueva se muestra una sola vez.',
    15: 'La contraseña no se ha restablecido. Salida del script de restablecimiento:',

    // interfaces.ts
    100: 'Interfaz web',
    101: 'Interfaz web',
  },
  de_DE: {
    // main.ts
    1: 'Die Weboberfläche ist bereit',
    2: 'Die Weboberfläche ist nicht erreichbar',
    3: 'Datenbankmigration',
    4: 'Datenbankmigration abgeschlossen',
    5: 'Datenbankmigration läuft. Dies kann lange dauern. NICHT neu starten.',

    // actions/resetPassword.ts
    10: 'Passwort zurücksetzen',
    11: 'Setzen Sie Ihr Uptime Kuma Admin-Passwort zurück',
    12: 'Passwort zurückgesetzt',
    13: 'Ihr Passwort wurde zurückgesetzt. Verwenden Sie das neue Passwort unten, um sich anzumelden.',
    14: 'Ersetzt das Admin-Passwort. Das aktuelle Passwort funktioniert nicht mehr, und das neue wird nur einmal angezeigt.',
    15: 'Das Passwort wurde nicht zurückgesetzt. Ausgabe des Rücksetzskripts:',

    // interfaces.ts
    100: 'Weboberfläche',
    101: 'Weboberfläche',
  },
  pl_PL: {
    // main.ts
    1: 'Interfejs webowy jest gotowy',
    2: 'Interfejs webowy jest niedostępny',
    3: 'Migracja bazy danych',
    4: 'Migracja bazy danych zakończona',
    5: 'Migracja bazy danych w toku. Może to zająć dużo czasu. NIE uruchamiaj ponownie.',

    // actions/resetPassword.ts
    10: 'Resetuj hasło',
    11: 'Resetuj hasło administratora Uptime Kuma',
    12: 'Hasło zresetowane',
    13: 'Twoje hasło zostało zresetowane. Użyj nowego hasła poniżej, aby się zalogować.',
    14: 'Zastępuje hasło administratora. Obecne hasło przestaje działać, a nowe jest wyświetlane tylko raz.',
    15: 'Hasło nie zostało zresetowane. Wynik skryptu resetowania:',

    // interfaces.ts
    100: 'Interfejs webowy',
    101: 'Interfejs webowy',
  },
  fr_FR: {
    // main.ts
    1: "L'interface web est prête",
    2: "L'interface web est inaccessible",
    3: 'Migration de la base de données',
    4: 'Migration de la base de données terminée',
    5: 'Migration de la base de données en cours. Cela peut prendre beaucoup de temps. NE PAS redémarrer.',

    // actions/resetPassword.ts
    10: 'Réinitialiser le mot de passe',
    11: "Réinitialiser le mot de passe administrateur d'Uptime Kuma",
    12: 'Mot de passe réinitialisé',
    13: 'Votre mot de passe a été réinitialisé. Utilisez le nouveau mot de passe ci-dessous pour vous connecter.',
    14: "Remplace le mot de passe administrateur. Le mot de passe actuel cesse de fonctionner et le nouveau n'est affiché qu'une seule fois.",
    15: "Le mot de passe n'a pas été réinitialisé. Sortie du script de réinitialisation :",

    // interfaces.ts
    100: 'Interface web',
    101: 'Interface web',
  },
} satisfies Record<string, LangDict>
