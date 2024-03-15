class Song {
  constructor(
    id,
    genreIds,
    title,
    artist,
    album,
    duration,
    releaseYear,
    producer,
    label,
    language,
    imageUrl,
    youtubeUrl,
    spotifyUrl,
    internal
  ) {
    this.id = id;
    this.genreIds = genreIds;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.releaseYear = releaseYear;
    this.producer = producer;
    this.label = label;
    this.language = language;
    this.imageUrl = imageUrl;
    this.youtubeUrl = youtubeUrl;
    this.spotifyUrl = spotifyUrl;
    this.internal = internal;
  }

  toString() {
    return `${this.title} by ${this.artist} (${this.album}) - ${this.duration} seconds - Genre: ${this.genreIds} - Release Year: ${this.releaseYear} - Producer: ${this.producer} - Label: ${this.label} - Language: ${this.language} - Image URL: ${this.imageUrl} - YouTube URL: ${this.youtubeUrl} - Spotify URL: ${this.spotifyUrl} - Internal: ${this.internal}`;
  }
}

export default Song;
