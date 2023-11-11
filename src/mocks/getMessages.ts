function getMessages(
  message: string,
  amount: number,
  seconds: number = 1,
): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(new Array<string>(amount).fill(message)),
      seconds * 1000,
    );
  });
}

export default getMessages;
