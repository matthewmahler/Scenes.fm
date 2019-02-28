const User = {
  email: "matthewjamesmahler@gmail.com",
  password: "password",
  userId: "UfjCgsVSNBfd",
  permissions: [1, 2, 3, 4, 5],
  followedPlaylists: ["array", "of", "playlistIds"]
};

const Artist = {
  name: "Feeny",
  bio:
    "Feeny is an indie rock band from New Brunswick New Jersey. In early 2016 Feeny released 'No Beauty in Routine' produced by Jesse Cannon (The Menzingers, Transit, Saves the Day). They have been touring the northeast in support of this record and are currently writing a follow up to be released in early 2019.",
  imagePath: "cloudinary url here probably",
  locationCityState: "New Brunswick, NJ",
  locationZip: "08844",
  tags: ["pop punk", "emo", "alternative rock"],
  artistID: "JPpenapYQRHA",
  memberAuthKey: "member secret password",
  friends: [
    "maybe an array of artistIDs to help people find related bands within a local scene",
    "essentially bring back the myspace top 9"
  ],
  albums: [
    {
      title: "untitled",
      releaseYear: "2019",
      albumId: "StbHiWwPksSc",
      tracks: [
        {
          trackTitle: "Are You Leaving?",
          trackNumber: 1,
          trackId: "jMkCfqkKnWPw",
          listens: 0
        },
        {
          trackTitle: "Puzo",
          trackNumber: 2,
          trackId: "tpgfjAPmzsJD",
          listens: 0
        },
        {
          trackTitle: "Bookends",
          trackNumber: 3,
          trackId: "EdZThLwFPqEw",
          listens: 0
        },
        {
          trackTitle: "Two Weeks Later",
          trackNumber: 4,
          trackId: "LAdBvFjMefAW",
          listens: 0
        },
        {
          trackTitle: "Better Off",
          trackNumber: 5,
          trackId: "MqiPbgvPckTM",
          listens: 0
        },
        {
          trackTitle: "I Don't Wanna Know",
          trackNumber: 6,
          trackId: "XkMrgaWLZfAs",
          listens: 0
        },
        {
          trackTitle: "Maybe We Can Just Be Friends",
          trackNumber: 7,
          trackId: "dBeaGpWsZNdC",
          listens: 0
        },
        {
          trackTitle: "Alacrity",
          trackNumber: 8,
          trackId: "PbhwapGScQiJ",
          listens: 0
        },
        {
          trackTitle: "Fallow",
          trackNumber: 9,
          trackId: "SWkLDGMPibcU",
          listens: 0
        },
        {
          trackTitle: "Fading Away",
          trackNumber: 10,
          trackId: "MqHjedczVPCE",
          listens: 0
        }
      ]
    },
    {
      title: "No Beauty in Routine",
      releaseYear: "2016",
      albumId: "f76x5c7z65v7xc",
      tracks: [
        {
          trackTitle: "No Beauty in Routine",
          trackNumber: 1,
          trackId: "ZQNYgdXmrWeU",
          listens: 0
        },
        {
          trackTitle: "Spoliation (Uncomfortable)",
          trackNumber: 2,
          trackId: "ernyjSRiqwQK",
          listens: 0
        },
        {
          trackTitle: "Spacious Days",
          trackNumber: 3,
          trackId: "craswERDZrWV",
          listens: 0
        },
        {
          trackTitle: "Altercations",
          trackNumber: 4,
          trackId: "SdxshSLmAfWT",
          listens: 0
        },
        {
          trackTitle: "Patience & Paranoia",
          trackNumber: 5,
          trackId: "ypBYTKAWmAqS",
          listens: 0
        },
        {
          trackTitle: "The Haymarket Affair",
          trackNumber: 6,
          trackId: "JGjTnuUjfHnN",
          listens: 0
        }
      ]
    },
    {
      title: "Winter Of Our Disconnect",
      releaseYear: "2015",
      albumId: "f76x5c7z65v7xc",
      tracks: [
        {
          trackTitle: "We'll Always Have Philly",
          trackNumber: 1,
          trackId: "pCyRsKbZTrnB",
          listens: 0
        },
        {
          trackTitle: "Gargling",
          trackNumber: 2,
          trackId: "UtXQnSpsjahp",
          listens: 0
        },
        {
          trackTitle: "You Call That Growing Up?",
          trackNumber: 3,
          trackId: "wbuJscRrJtTE",
          listens: 0
        },
        {
          trackTitle: "Amanda Boardwalk",
          trackNumber: 4,
          trackId: "mkuyCbrGbExh",
          listens: 0
        },
        {
          trackTitle: "Pull Yourself Together",
          trackNumber: 5,
          trackId: "QpnwrMkvNYRZ",
          listens: 0
        }
      ]
    }
  ],
  members: ["mahlersUserID", "joesUserID", "jordansUserID", "mattsUserID"]
};

const Playlist = {
  playlistID: "YnUmidkGUPeA",
  ownerID: userId,
  songs: ["QpnwrMkvNYRZ", "mkuyCbrGbExh", "wbuJscRrJtTE"]
};

const Permission = [
  isAdmin,
  isModerator,
  isArtist,
  isListener,
  isUser,
  isMember
];

const BlogPost = {
  owner: "ArtistIdHere",
  title: "wow look at my blog post title",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvarius augue vestibulum nisl dignissim fringilla. Duis vestibulumpurus sapien, nec ultricies enim maximus ac. Sed tincidunt tortornon dui imperdiet dignissim. Vestibulum vel mattis lectus. Integerdignissim ante libero, nec porttitor ex auctor sit amet.",
  comments: [
    {
      commentOwner: "ownerId",
      commentBody: "first! lolololol"
    }
  ]
};
