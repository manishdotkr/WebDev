package temp;
import java.util.*;

public class main {
    public static void main(String args[]) 
    {
        // Scanner scn = new Scanner(System.in);
        // int n = scn.nextInt();
        // int[] dp = new int [n+1];
        // dp[0] = 0;
        // dp[1] = 1;
        // for(int i=2; i<dp.length; i++)
        // {
        //     dp[i] = dp[i-1] + dp[i-2];
        // }
        // System.out.println(dp[n]);

        // System.out.println(steps(n));
        for(int i=2 ; i<50000000; i++){
            if( steps(i) != 1 ){
                System.out.println(i+" <---- ");
            }
        }

        System.out.println("done");
        
    }
    
    public static int steps(int n){
        int stp=0;

        while(n>1){
            if ( n%2 == 0) {
                n /= 2; stp++;
            }
            else {
                n -= 1;
                stp++;
            }
        }
        // System.out.print(n+"\t");
        // return stp;
        return n;
    } 
}