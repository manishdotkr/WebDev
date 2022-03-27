import java.util.*;

public class purnima {
    public static void main(String args[]) 
    {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        // int [] arr = {9 , 8 , 4 , 5 , 6 };
        int [] arr = new int [n];
        for(int i=0; i<arr.length; i++) arr[i] = scn.nextInt();

        System.out.println( chkIncDec( arr ) ) ;
        
    }
    public static boolean chkIncDec(int [] arr ) {
        boolean chk = true;
        for(int i=1; i<arr.length; i++) {
            if( arr[i] < arr[i-1] && chk ) {
                
            } else if ( arr[i] > arr[i-1] ) {
                chk = false;
            } else {
                return false;
            }
        }

        return true;
    } 

}