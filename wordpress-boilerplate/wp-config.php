<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'mutavie' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#r.W53hGYN>`CFuW.oTc~n;Tox5mlM;y}x-Q&IN$~`_A>Bz!So|k2_.]c?2@WRTg' );
define( 'SECURE_AUTH_KEY',  'w2CA&N77;J?rHep>?|&Wh/!fQOY{&EsHm6VZ w4b|wt7Ds5mK`y#DdC!j~W_<9ER' );
define( 'LOGGED_IN_KEY',    '>^5GONhw,<cS^V}S y+;%.!<CS=bn]vOFq2;NznK{|;m%(6~ <MT&5*2?@((;s-q' );
define( 'NONCE_KEY',        'Ks>=)G?}Crp7@?,$l},@?vEp L<eN@qVt8sdZg3~kI&lP-=M>QU&H:Typb-8h+F{' );
define( 'AUTH_SALT',        'hiD@,47uZbLW:G,7IjNV~1Scm#}~WWT]s0]C;^FiET8u4kyr^4x<pZ)-6C~r22~A' );
define( 'SECURE_AUTH_SALT', 'R2e`u%Z=1Yw,Raml%6$IoAMDDTV<)eO@2jRPq,Zb7fWN6@j[x;Q(ZiItO,P4K@jq' );
define( 'LOGGED_IN_SALT',   'bu!M6%`;Si[r%+Icxt6)~Va8+lv`b7=9NxPX.UsJQ0%V184jDRZ,TgEa9lpZDrwA' );
define( 'NONCE_SALT',       'hR$PJCIJ2,,Z+~zaVLftDqAcKs6y~BzIvr;l#C#J_k9@HK0DuYK]+KvLVCnCP5vb' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
