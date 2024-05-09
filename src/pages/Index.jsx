import { useState } from "react";
import { Container, VStack, Text, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaMusic, FaMicrophone, FaSave } from "react-icons/fa";

const Index = () => {
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const toast = useToast();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleLyricsChange = (event) => setLyrics(event.target.value);

  const saveTrack = () => {
    // Placeholder for saving logic
    toast({
      title: "Track saved.",
      description: "Your music track has been saved successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Music Composer App
        </Text>
        <Input placeholder="Track Title" value={title} onChange={handleTitleChange} size="lg" />
        <Textarea placeholder="Write your lyrics here..." value={lyrics} onChange={handleLyricsChange} size="lg" height="200px" />
        <Button leftIcon={<FaMusic />} colorScheme="purple" onClick={() => alert("Compose music functionality not implemented.")}>
          Compose Music
        </Button>
        <Button leftIcon={<FaMicrophone />} colorScheme="blue" onClick={() => alert("Live recording functionality not implemented.")}>
          Record Live
        </Button>
        <Button leftIcon={<FaSave />} colorScheme="green" onClick={saveTrack}>
          Save Track
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
