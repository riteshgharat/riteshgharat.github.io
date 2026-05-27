function Location({
  location,
  mapLink,
}: {
  location: string;
  mapLink: string;
}) {
  return (
    <a
      href={mapLink}
      className="text-base font-medium location-cursor"
      target="_blank"
      rel="noopener noreferrer"
    >
      {location}
    </a>
  );
}

export default Location;
