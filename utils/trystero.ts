import { joinRoom } from 'trystero/mqtt'

/**
 * Erstellt einen Trystero-Raum mit optionalem Passwort
 * @param roomName Name des Raums
 * @param password Optionales Passwort
 */
export const createRoom = (roomName: string, password?: string) => {
  const hashRoomName = password ? `${roomName}${password}` : roomName
  try {
    return joinRoom({appId: 'isitarch', password: password}, hashRoomName)
  } catch (error) {
    console.log('error');
    console.log(error);
    
  }
}