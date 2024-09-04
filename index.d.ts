declare module 'idmeta-react-native' {
  interface IdmetaReactNative {
    /**
     * Starts the Flutter flow with the provided flow ID and user token.
     *
     * @param flowId - The unique identifier for the flow.
     * @param userToken - The user authentication token.
     * @throws Will throw an error if either flowId or userToken is not provided.
     */
    startIdmetaFlow(flowId: string, userToken: string): void;
  }

  const IdmetaReactNative: IdmetaReactNative;

  export default IdmetaReactNative;
}
