import org.apache.commons.io.Charsets;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.ConnectionConfig;
import org.apache.http.config.SocketConfig;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.FactoryBean;

public class HttpClientFactoryBean implements FactoryBean<HttpClient> {
	
	//最大支持的连接数
	private static final int DEFAULT_MAX_TOTAL = 512;
	//针对某个域名的最大连接数
	private static final int DEFAULT_MAX_PER_ROUTE = 64;
	//跟目标服务建立连接超时时间
	private static final int DEFAULT_CONNECTION_TIMEOUT = 5000;
	//读取超时有两个地方可以设置(1.connect 2.read),connect可以通过socketConfig设置，如果不设置默认用RequestConfig
	private static final int DEFAULT_SOCKET_TIMEOUT = 3000;
	//从连接池中获取连接的超时时间
	private static final int DEFAULT_REQUEST_CONNECTION_TIMEOUT = 1000;
	
	@Override
	public HttpClient getObject() throws Exception {
		SocketConfig socketConfig = SocketConfig.custom().setSoTimeout(DEFAULT_CONNECTION_TIMEOUT).build();
		
		ConnectionConfig config = ConnectionConfig.custom().setCharset(Charsets.UTF_8).build();
		
		RequestConfig defaultRequestConfig = RequestConfig.custom().setConnectTimeout(DEFAULT_CONNECTION_TIMEOUT)
			.setSocketTimeout(DEFAULT_SOCKET_TIMEOUT).setConnectionRequestTimeout(DEFAULT_REQUEST_CONNECTION_TIMEOUT)
			.build();
		
		return HttpClients.custom().setMaxConnPerRoute(DEFAULT_MAX_PER_ROUTE).setMaxConnTotal(DEFAULT_MAX_TOTAL)
			.setDefaultConnectionConfig(config).setDefaultRequestConfig(defaultRequestConfig)
			.setDefaultSocketConfig(socketConfig).build();
	}
	
	@Override
	public Class<?> getObjectType() {
		return HttpClient.class;
	}
	
	@Override
	public boolean isSingleton() {
		return true;
	}
}