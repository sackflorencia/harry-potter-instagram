import gryffindorAvatar from "../assets/houses/gryffindor.png";
import slytherinAvatar from "../assets/houses/slytherin.png";
import hufflepuffAvatar from "../assets/houses/hufflepuff.png";
import ravenclawAvatar from "../assets/houses/ravenclaw.png";

export const HOUSE_STATS = {
  gryffindor: {
    avatar: gryffindorAvatar,
    bio: "Home of the brave.",
    followers: 5230,
    following: 134,
  },

  slytherin: {
    avatar: slytherinAvatar,
    bio: "Ambition and cunning.",
    followers: 4890,
    following: 98,
  },

  hufflepuff: {
    avatar: hufflepuffAvatar,
    bio: "Loyal and hardworking.",
    followers: 4120,
    following: 120,
  },

  ravenclaw: {
    avatar: ravenclawAvatar,
    bio: "Wit and wisdom.",
    followers: 4380,
    following: 110,
  },
} as const;