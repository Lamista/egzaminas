package lt.laurastasiule.service;

import lt.laurastasiule.repository.IClientRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class ClientServiceTest {
    @InjectMocks
    private ClientService clientService;

    @Mock
    private IClientRepository clientRepository;

    @Test
    void deleteClient_shouldDeleteClientInDb() {
        clientService.deleteClient(1l);
        verify(clientRepository, times(1)).deleteById((1l));
    }
}
