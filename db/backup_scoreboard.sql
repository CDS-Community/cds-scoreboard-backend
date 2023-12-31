PGDMP                          {            scoreboard-cds    15.3    15.3 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    65550    scoreboard-cds    DATABASE     �   CREATE DATABASE "scoreboard-cds" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
     DROP DATABASE "scoreboard-cds";
                postgres    false            �            1259    65678 
   assitances    TABLE     5  CREATE TABLE public.assitances (
    id integer NOT NULL,
    description character varying,
    "time" time without time zone NOT NULL,
    state boolean,
    user_id integer NOT NULL,
    event_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.assitances;
       public         heap    postgres    false            �            1259    65677    assitances_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.assitances_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.assitances_event_id_seq;
       public          postgres    false    241            �           0    0    assitances_event_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.assitances_event_id_seq OWNED BY public.assitances.event_id;
          public          postgres    false    240            �            1259    65675    assitances_id_seq    SEQUENCE     �   CREATE SEQUENCE public.assitances_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.assitances_id_seq;
       public          postgres    false    241            �           0    0    assitances_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.assitances_id_seq OWNED BY public.assitances.id;
          public          postgres    false    238            �            1259    65676    assitances_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.assitances_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.assitances_user_id_seq;
       public          postgres    false    241            �           0    0    assitances_user_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.assitances_user_id_seq OWNED BY public.assitances.user_id;
          public          postgres    false    239            �            1259    65552 
   commission    TABLE     4  CREATE TABLE public.commission (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(200) NOT NULL,
    state_action character varying(4),
    state boolean DEFAULT true,
    "updatedAt" timestamp without time zone,
    "createdAt" timestamp with time zone
);
    DROP TABLE public.commission;
       public         heap    postgres    false            �            1259    65551    commission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.commission_id_seq;
       public          postgres    false    215            �           0    0    commission_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.commission_id_seq OWNED BY public.commission.id;
          public          postgres    false    214            �            1259    65609    events    TABLE     �  CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying NOT NULL,
    date date,
    start_time time without time zone,
    end_time time without time zone,
    location character varying,
    coordinates point,
    organizer_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    state boolean DEFAULT true
);
    DROP TABLE public.events;
       public         heap    postgres    false            �            1259    65607    events_id_seq    SEQUENCE     �   CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.events_id_seq;
       public          postgres    false    228            �           0    0    events_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;
          public          postgres    false    226            �            1259    65608    events_organizer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.events_organizer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.events_organizer_id_seq;
       public          postgres    false    228            �           0    0    events_organizer_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.events_organizer_id_seq OWNED BY public.events.organizer_id;
          public          postgres    false    227            �            1259    65701 	   img_event    TABLE     J  CREATE TABLE public.img_event (
    id integer NOT NULL,
    title character varying(30) NOT NULL,
    description character varying(100),
    img character varying NOT NULL,
    state boolean DEFAULT true,
    event_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.img_event;
       public         heap    postgres    false            �            1259    65700    img_event_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.img_event_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.img_event_event_id_seq;
       public          postgres    false    244            �           0    0    img_event_event_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.img_event_event_id_seq OWNED BY public.img_event.event_id;
          public          postgres    false    243            �            1259    65699    img_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.img_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.img_event_id_seq;
       public          postgres    false    244            �           0    0    img_event_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.img_event_id_seq OWNED BY public.img_event.id;
          public          postgres    false    242            �            1259    65576    level    TABLE     �   CREATE TABLE public.level (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(100),
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.level;
       public         heap    postgres    false            �            1259    65626    level_detail    TABLE     &  CREATE TABLE public.level_detail (
    id integer NOT NULL,
    date date NOT NULL,
    level_score integer,
    user_id integer NOT NULL,
    level_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    state boolean DEFAULT true
);
     DROP TABLE public.level_detail;
       public         heap    postgres    false            �            1259    65623    level_detail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.level_detail_id_seq;
       public          postgres    false    232            �           0    0    level_detail_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.level_detail_id_seq OWNED BY public.level_detail.id;
          public          postgres    false    229            �            1259    65625    level_detail_level_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_detail_level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.level_detail_level_id_seq;
       public          postgres    false    232            �           0    0    level_detail_level_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.level_detail_level_id_seq OWNED BY public.level_detail.level_id;
          public          postgres    false    231            �            1259    65624    level_detail_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_detail_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.level_detail_user_id_seq;
       public          postgres    false    232            �           0    0    level_detail_user_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.level_detail_user_id_seq OWNED BY public.level_detail.user_id;
          public          postgres    false    230            �            1259    65575    level_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.level_id_seq;
       public          postgres    false    221            �           0    0    level_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.level_id_seq OWNED BY public.level.id;
          public          postgres    false    220            �            1259    65568    position    TABLE       CREATE TABLE public."position" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(100),
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public."position";
       public         heap    postgres    false            �            1259    65567    position_id_seq    SEQUENCE     �   CREATE SEQUENCE public.position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.position_id_seq;
       public          postgres    false    219            �           0    0    position_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.position_id_seq OWNED BY public."position".id;
          public          postgres    false    218            �            1259    65560    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(15) NOT NULL,
    description character varying(50),
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    65559    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    217            �           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    216            �            1259    65648    staff_event    TABLE     �  CREATE TABLE public.staff_event (
    id integer NOT NULL,
    start_time time without time zone,
    end_time time without time zone,
    description character varying,
    score integer,
    state boolean DEFAULT true,
    user_id integer NOT NULL,
    event_id integer NOT NULL,
    commission_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.staff_event;
       public         heap    postgres    false            �            1259    65647    staff_event_commission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_event_commission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.staff_event_commission_id_seq;
       public          postgres    false    237            �           0    0    staff_event_commission_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.staff_event_commission_id_seq OWNED BY public.staff_event.commission_id;
          public          postgres    false    236            �            1259    65646    staff_event_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_event_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.staff_event_event_id_seq;
       public          postgres    false    237            �           0    0    staff_event_event_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.staff_event_event_id_seq OWNED BY public.staff_event.event_id;
          public          postgres    false    235            �            1259    65644    staff_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.staff_event_id_seq;
       public          postgres    false    237            �           0    0    staff_event_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.staff_event_id_seq OWNED BY public.staff_event.id;
          public          postgres    false    233            �            1259    65645    staff_event_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_event_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.staff_event_user_id_seq;
       public          postgres    false    237            �           0    0    staff_event_user_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.staff_event_user_id_seq OWNED BY public.staff_event.user_id;
          public          postgres    false    234            �            1259    65719    stake    TABLE     \  CREATE TABLE public.stake (
    id integer NOT NULL,
    date time without time zone NOT NULL,
    score integer,
    state boolean DEFAULT true,
    assistences_id integer NOT NULL,
    level_detail_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    description character varying
);
    DROP TABLE public.stake;
       public         heap    postgres    false            �            1259    65717    stake_assistences_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stake_assistences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.stake_assistences_id_seq;
       public          postgres    false    248            �           0    0    stake_assistences_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.stake_assistences_id_seq OWNED BY public.stake.assistences_id;
          public          postgres    false    246            �            1259    65716    stake_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stake_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.stake_id_seq;
       public          postgres    false    248            �           0    0    stake_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.stake_id_seq OWNED BY public.stake.id;
          public          postgres    false    245            �            1259    65718    stake_level_detail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stake_level_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.stake_level_detail_id_seq;
       public          postgres    false    248            �           0    0    stake_level_detail_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.stake_level_detail_id_seq OWNED BY public.stake.level_detail_id;
          public          postgres    false    247            �            1259    65586    user    TABLE     �  CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(20) NOT NULL,
    password character varying NOT NULL,
    name character varying(70) NOT NULL,
    birthdate date,
    date_of_register date,
    number numeric(15,0),
    staff_state boolean DEFAULT false,
    img character varying,
    role_id integer NOT NULL,
    position_id integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp with time zone,
    state boolean DEFAULT true
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    65583    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    225            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    222            �            1259    65585    user_position_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.user_position_id_seq;
       public          postgres    false    225            �           0    0    user_position_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_position_id_seq OWNED BY public."user".position_id;
          public          postgres    false    224            �            1259    65584    user_role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_role_id_seq;
       public          postgres    false    225            �           0    0    user_role_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_role_id_seq OWNED BY public."user".role_id;
          public          postgres    false    223            �           2604    65681    assitances id    DEFAULT     n   ALTER TABLE ONLY public.assitances ALTER COLUMN id SET DEFAULT nextval('public.assitances_id_seq'::regclass);
 <   ALTER TABLE public.assitances ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    241    241            �           2604    65682    assitances user_id    DEFAULT     x   ALTER TABLE ONLY public.assitances ALTER COLUMN user_id SET DEFAULT nextval('public.assitances_user_id_seq'::regclass);
 A   ALTER TABLE public.assitances ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    241    239    241            �           2604    65683    assitances event_id    DEFAULT     z   ALTER TABLE ONLY public.assitances ALTER COLUMN event_id SET DEFAULT nextval('public.assitances_event_id_seq'::regclass);
 B   ALTER TABLE public.assitances ALTER COLUMN event_id DROP DEFAULT;
       public          postgres    false    240    241    241            �           2604    65555    commission id    DEFAULT     n   ALTER TABLE ONLY public.commission ALTER COLUMN id SET DEFAULT nextval('public.commission_id_seq'::regclass);
 <   ALTER TABLE public.commission ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    65612 	   events id    DEFAULT     f   ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);
 8   ALTER TABLE public.events ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    228    228            �           2604    65613    events organizer_id    DEFAULT     z   ALTER TABLE ONLY public.events ALTER COLUMN organizer_id SET DEFAULT nextval('public.events_organizer_id_seq'::regclass);
 B   ALTER TABLE public.events ALTER COLUMN organizer_id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    65704    img_event id    DEFAULT     l   ALTER TABLE ONLY public.img_event ALTER COLUMN id SET DEFAULT nextval('public.img_event_id_seq'::regclass);
 ;   ALTER TABLE public.img_event ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    242    244            �           2604    65706    img_event event_id    DEFAULT     x   ALTER TABLE ONLY public.img_event ALTER COLUMN event_id SET DEFAULT nextval('public.img_event_event_id_seq'::regclass);
 A   ALTER TABLE public.img_event ALTER COLUMN event_id DROP DEFAULT;
       public          postgres    false    244    243    244            �           2604    65579    level id    DEFAULT     d   ALTER TABLE ONLY public.level ALTER COLUMN id SET DEFAULT nextval('public.level_id_seq'::regclass);
 7   ALTER TABLE public.level ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    65629    level_detail id    DEFAULT     r   ALTER TABLE ONLY public.level_detail ALTER COLUMN id SET DEFAULT nextval('public.level_detail_id_seq'::regclass);
 >   ALTER TABLE public.level_detail ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    229    232            �           2604    65630    level_detail user_id    DEFAULT     |   ALTER TABLE ONLY public.level_detail ALTER COLUMN user_id SET DEFAULT nextval('public.level_detail_user_id_seq'::regclass);
 C   ALTER TABLE public.level_detail ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    230    232    232            �           2604    65631    level_detail level_id    DEFAULT     ~   ALTER TABLE ONLY public.level_detail ALTER COLUMN level_id SET DEFAULT nextval('public.level_detail_level_id_seq'::regclass);
 D   ALTER TABLE public.level_detail ALTER COLUMN level_id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    65571    position id    DEFAULT     l   ALTER TABLE ONLY public."position" ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);
 <   ALTER TABLE public."position" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    65563    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    65651    staff_event id    DEFAULT     p   ALTER TABLE ONLY public.staff_event ALTER COLUMN id SET DEFAULT nextval('public.staff_event_id_seq'::regclass);
 =   ALTER TABLE public.staff_event ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    237    237            �           2604    65653    staff_event user_id    DEFAULT     z   ALTER TABLE ONLY public.staff_event ALTER COLUMN user_id SET DEFAULT nextval('public.staff_event_user_id_seq'::regclass);
 B   ALTER TABLE public.staff_event ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    237    234    237            �           2604    65654    staff_event event_id    DEFAULT     |   ALTER TABLE ONLY public.staff_event ALTER COLUMN event_id SET DEFAULT nextval('public.staff_event_event_id_seq'::regclass);
 C   ALTER TABLE public.staff_event ALTER COLUMN event_id DROP DEFAULT;
       public          postgres    false    235    237    237            �           2604    65655    staff_event commission_id    DEFAULT     �   ALTER TABLE ONLY public.staff_event ALTER COLUMN commission_id SET DEFAULT nextval('public.staff_event_commission_id_seq'::regclass);
 H   ALTER TABLE public.staff_event ALTER COLUMN commission_id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    65722    stake id    DEFAULT     d   ALTER TABLE ONLY public.stake ALTER COLUMN id SET DEFAULT nextval('public.stake_id_seq'::regclass);
 7   ALTER TABLE public.stake ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    248    248            �           2604    65724    stake assistences_id    DEFAULT     |   ALTER TABLE ONLY public.stake ALTER COLUMN assistences_id SET DEFAULT nextval('public.stake_assistences_id_seq'::regclass);
 C   ALTER TABLE public.stake ALTER COLUMN assistences_id DROP DEFAULT;
       public          postgres    false    246    248    248            �           2604    65725    stake level_detail_id    DEFAULT     ~   ALTER TABLE ONLY public.stake ALTER COLUMN level_detail_id SET DEFAULT nextval('public.stake_level_detail_id_seq'::regclass);
 D   ALTER TABLE public.stake ALTER COLUMN level_detail_id DROP DEFAULT;
       public          postgres    false    247    248    248            �           2604    65589    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    225    225            �           2604    65591    user role_id    DEFAULT     n   ALTER TABLE ONLY public."user" ALTER COLUMN role_id SET DEFAULT nextval('public.user_role_id_seq'::regclass);
 =   ALTER TABLE public."user" ALTER COLUMN role_id DROP DEFAULT;
       public          postgres    false    225    223    225            �           2604    65592    user position_id    DEFAULT     v   ALTER TABLE ONLY public."user" ALTER COLUMN position_id SET DEFAULT nextval('public.user_position_id_seq'::regclass);
 A   ALTER TABLE public."user" ALTER COLUMN position_id DROP DEFAULT;
       public          postgres    false    225    224    225            �          0    65678 
   assitances 
   TABLE DATA           q   COPY public.assitances (id, description, "time", state, user_id, event_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   ��       y          0    65552 
   commission 
   TABLE DATA           j   COPY public.commission (id, name, description, state_action, state, "updatedAt", "createdAt") FROM stdin;
    public          postgres    false    215   ��       �          0    65609    events 
   TABLE DATA           �   COPY public.events (id, title, description, date, start_time, end_time, location, coordinates, organizer_id, "createdAt", "updatedAt", state) FROM stdin;
    public          postgres    false    228   ]�       �          0    65701 	   img_event 
   TABLE DATA           k   COPY public.img_event (id, title, description, img, state, event_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    244   +�                 0    65576    level 
   TABLE DATA           W   COPY public.level (id, name, description, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   H�       �          0    65626    level_detail 
   TABLE DATA           q   COPY public.level_detail (id, date, level_score, user_id, level_id, "createdAt", "updatedAt", state) FROM stdin;
    public          postgres    false    232   ݭ       }          0    65568    position 
   TABLE DATA           \   COPY public."position" (id, name, description, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   :�       {          0    65560    role 
   TABLE DATA           V   COPY public.role (id, name, description, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   ��       �          0    65648    staff_event 
   TABLE DATA           �   COPY public.staff_event (id, start_time, end_time, description, score, state, user_id, event_id, commission_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   +�       �          0    65719    stake 
   TABLE DATA              COPY public.stake (id, date, score, state, assistences_id, level_detail_id, "createdAt", "updatedAt", description) FROM stdin;
    public          postgres    false    248   H�       �          0    65586    user 
   TABLE DATA           �   COPY public."user" (id, email, password, name, birthdate, date_of_register, number, staff_state, img, role_id, position_id, "createdAt", "updatedAt", state) FROM stdin;
    public          postgres    false    225   e�       �           0    0    assitances_event_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.assitances_event_id_seq', 1, false);
          public          postgres    false    240            �           0    0    assitances_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.assitances_id_seq', 1, false);
          public          postgres    false    238            �           0    0    assitances_user_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.assitances_user_id_seq', 1, false);
          public          postgres    false    239            �           0    0    commission_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.commission_id_seq', 2, true);
          public          postgres    false    214            �           0    0    events_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.events_id_seq', 2, true);
          public          postgres    false    226            �           0    0    events_organizer_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.events_organizer_id_seq', 1, false);
          public          postgres    false    227            �           0    0    img_event_event_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.img_event_event_id_seq', 1, false);
          public          postgres    false    243            �           0    0    img_event_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.img_event_id_seq', 1, false);
          public          postgres    false    242            �           0    0    level_detail_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.level_detail_id_seq', 2, true);
          public          postgres    false    229            �           0    0    level_detail_level_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.level_detail_level_id_seq', 1, false);
          public          postgres    false    231            �           0    0    level_detail_user_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.level_detail_user_id_seq', 1, false);
          public          postgres    false    230            �           0    0    level_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.level_id_seq', 1, true);
          public          postgres    false    220            �           0    0    position_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.position_id_seq', 2, true);
          public          postgres    false    218            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 4, true);
          public          postgres    false    216            �           0    0    staff_event_commission_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.staff_event_commission_id_seq', 1, false);
          public          postgres    false    236            �           0    0    staff_event_event_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.staff_event_event_id_seq', 1, false);
          public          postgres    false    235            �           0    0    staff_event_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.staff_event_id_seq', 1, false);
          public          postgres    false    233            �           0    0    staff_event_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.staff_event_user_id_seq', 1, false);
          public          postgres    false    234            �           0    0    stake_assistences_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.stake_assistences_id_seq', 1, false);
          public          postgres    false    246            �           0    0    stake_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.stake_id_seq', 1, false);
          public          postgres    false    245            �           0    0    stake_level_detail_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.stake_level_detail_id_seq', 1, false);
          public          postgres    false    247            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public          postgres    false    222            �           0    0    user_position_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.user_position_id_seq', 1, false);
          public          postgres    false    224            �           0    0    user_role_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_role_id_seq', 1, false);
          public          postgres    false    223            �           2606    65558    commission commission_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.commission
    ADD CONSTRAINT commission_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.commission DROP CONSTRAINT commission_pkey;
       public            postgres    false    215            �           2606    65582    level level_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.level DROP CONSTRAINT level_pkey;
       public            postgres    false    221            �           2606    65687    assitances pk_assistances 
   CONSTRAINT     W   ALTER TABLE ONLY public.assitances
    ADD CONSTRAINT pk_assistances PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.assitances DROP CONSTRAINT pk_assistances;
       public            postgres    false    241            �           2606    65617    events pk_events 
   CONSTRAINT     N   ALTER TABLE ONLY public.events
    ADD CONSTRAINT pk_events PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.events DROP CONSTRAINT pk_events;
       public            postgres    false    228            �           2606    65710    img_event pk_img_event 
   CONSTRAINT     T   ALTER TABLE ONLY public.img_event
    ADD CONSTRAINT pk_img_event PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.img_event DROP CONSTRAINT pk_img_event;
       public            postgres    false    244            �           2606    65633    level_detail pk_level_detail 
   CONSTRAINT     Z   ALTER TABLE ONLY public.level_detail
    ADD CONSTRAINT pk_level_detail PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.level_detail DROP CONSTRAINT pk_level_detail;
       public            postgres    false    232            �           2606    65659    staff_event pk_staff_event 
   CONSTRAINT     X   ALTER TABLE ONLY public.staff_event
    ADD CONSTRAINT pk_staff_event PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.staff_event DROP CONSTRAINT pk_staff_event;
       public            postgres    false    237            �           2606    65727    stake pk_stake 
   CONSTRAINT     L   ALTER TABLE ONLY public.stake
    ADD CONSTRAINT pk_stake PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.stake DROP CONSTRAINT pk_stake;
       public            postgres    false    248            �           2606    65596    user pk_user 
   CONSTRAINT     L   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (id);
 8   ALTER TABLE ONLY public."user" DROP CONSTRAINT pk_user;
       public            postgres    false    225            �           2606    65574    position position_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."position" DROP CONSTRAINT position_pkey;
       public            postgres    false    219            �           2606    65566    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    217            �           2606    65728    stake fk_assistances    FK CONSTRAINT        ALTER TABLE ONLY public.stake
    ADD CONSTRAINT fk_assistances FOREIGN KEY (assistences_id) REFERENCES public.assitances(id);
 >   ALTER TABLE ONLY public.stake DROP CONSTRAINT fk_assistances;
       public          postgres    false    3288    248    241            �           2606    65670    staff_event fk_commission    FK CONSTRAINT     �   ALTER TABLE ONLY public.staff_event
    ADD CONSTRAINT fk_commission FOREIGN KEY (commission_id) REFERENCES public.commission(id);
 C   ALTER TABLE ONLY public.staff_event DROP CONSTRAINT fk_commission;
       public          postgres    false    215    3272    237            �           2606    65665    staff_event fk_event    FK CONSTRAINT     u   ALTER TABLE ONLY public.staff_event
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES public.events(id);
 >   ALTER TABLE ONLY public.staff_event DROP CONSTRAINT fk_event;
       public          postgres    false    3282    228    237            �           2606    65693    assitances fk_event    FK CONSTRAINT     t   ALTER TABLE ONLY public.assitances
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES public.events(id);
 =   ALTER TABLE ONLY public.assitances DROP CONSTRAINT fk_event;
       public          postgres    false    241    3282    228            �           2606    65711    img_event fk_event    FK CONSTRAINT     s   ALTER TABLE ONLY public.img_event
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES public.events(id);
 <   ALTER TABLE ONLY public.img_event DROP CONSTRAINT fk_event;
       public          postgres    false    3282    228    244            �           2606    65639    level_detail fk_level    FK CONSTRAINT     u   ALTER TABLE ONLY public.level_detail
    ADD CONSTRAINT fk_level FOREIGN KEY (level_id) REFERENCES public.level(id);
 ?   ALTER TABLE ONLY public.level_detail DROP CONSTRAINT fk_level;
       public          postgres    false    3278    221    232            �           2606    65733    stake fk_level_detail    FK CONSTRAINT     �   ALTER TABLE ONLY public.stake
    ADD CONSTRAINT fk_level_detail FOREIGN KEY (level_detail_id) REFERENCES public.level_detail(id);
 ?   ALTER TABLE ONLY public.stake DROP CONSTRAINT fk_level_detail;
       public          postgres    false    248    232    3284            �           2606    65602    user fk_position    FK CONSTRAINT     z   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_position FOREIGN KEY (position_id) REFERENCES public."position"(id);
 <   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_position;
       public          postgres    false    219    3276    225            �           2606    65597    user fk_role    FK CONSTRAINT     l   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES public.role(id);
 8   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_role;
       public          postgres    false    217    225    3274            �           2606    65618    events fk_user    FK CONSTRAINT     s   ALTER TABLE ONLY public.events
    ADD CONSTRAINT fk_user FOREIGN KEY (organizer_id) REFERENCES public."user"(id);
 8   ALTER TABLE ONLY public.events DROP CONSTRAINT fk_user;
       public          postgres    false    3280    228    225            �           2606    65634    level_detail fk_user    FK CONSTRAINT     t   ALTER TABLE ONLY public.level_detail
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public."user"(id);
 >   ALTER TABLE ONLY public.level_detail DROP CONSTRAINT fk_user;
       public          postgres    false    225    232    3280            �           2606    65660    staff_event fk_user    FK CONSTRAINT     s   ALTER TABLE ONLY public.staff_event
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public."user"(id);
 =   ALTER TABLE ONLY public.staff_event DROP CONSTRAINT fk_user;
       public          postgres    false    3280    225    237            �           2606    65688    assitances fk_user    FK CONSTRAINT     r   ALTER TABLE ONLY public.assitances
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public."user"(id);
 <   ALTER TABLE ONLY public.assitances DROP CONSTRAINT fk_user;
       public          postgres    false    241    3280    225            �      x������ � �      y   �   x�U�A�0E��)�`�E���p3�	���d�!��[ب����7B3k��V�42���1�X9'P��Qf��@#�Q f��.~�g��B�9U�tԴR*{|ʀc�q"5��)�;iܽ9w���_�pkC�����쳵�~ jQ=H      �   �   x�u�O�0��ݧ�Q��t���T�G/q�P���u�~z뜈!���I����[�
uj������`��Ǝ&=4�c�W�h2o4�;-IBO�����ڐI�p(�K�B���$�>�����Y��:�2%Y���b6���:=�C]��"E^��\�E��%_L�,i�c�W�љGQ��S)      �      x������ � �         �   x�e�M
�0F��)�i4�+�" ����R�OMR��q��{�7
�?�ĵu���)5ذ"�J|�#/�N��(0���H��AD�jyVL��%�.�6�A�a�����d��n��c�ʘ+�PR�/x�,�      �   M   x�u̱�0�ڞ�b�߱!��1�_P� ���(��֣�.ܲ5��g!
�L��C�X �.�bXD�=��u�ZvS�WA�      }   S   x�3��IML)�t�KN,JOL�WHIU(�OIT�ITH��-��LIL�,�4202�5��54R00�25�22�351�50�#����� �x�      {   ~   x�}ͱ�  ���~ r ����.7��e A�;�W��7<�����fi	�H/b�{���91t�Ĺ�jʣ���s���S����H�?���TZ���1-�����8�1�8�I߬��23}      �      x������ � �      �      x������ � �      �   [  x���Mo�0 ��s�=xڂ�z���8���x�"��(��~�鲝��i���bP�H�9��>D�����1������y^�{�^hu�YT��1��n�:�����\�O30�J	{N�^ �d�@�@@��L E��@��Jc�#q  wW!F-�02]��;ro�@�kc)KL�o�ŝI�ի��>��ʗz6�m�%9nee��XҎ��u�� C]�T%п,CO��f�WnUo�������~�8 M�}�+D��J���+����&��Ӈ�l���h,�pT�YB�X�yƬA�ǣ.���,��/!�E�Tۤv�+�W�J6f�V���     